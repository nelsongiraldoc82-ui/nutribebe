'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Baby, Utensils, ChefHat, BookOpen, Sparkles, 
  Clock, AlertTriangle, CheckCircle, ChevronRight,
  Calendar, Heart, ThumbsUp, ThumbsDown, AlertCircle,
  MinusCircle, MessageSquare, LogOut, Copy, Share2,
  Key, Plus, ShoppingCart, Check, Cake
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-react'
import { 
  introStepsData, 
  groupStepsByMonth, 
  calculateCurrentMonth,
  getAgeConfig,
  type IntroStep, 
  type Meal 
} from '@/lib/intro-steps-data'
import { 
  calculateMonthlyShoppingList, 
  getAllMonthlyShoppingLists,
  type ShoppingItem,
  type MonthlyShoppingList 
} from '@/lib/shopping-list'
import { format, differenceInMonths, addMonths } from 'date-fns'
import { es } from 'date-fns/locale'

// Types
interface Family {
  id: string
  code: string
  name: string
  baby_name?: string
  baby_birth_date?: string
  created_at: string
}

// Storage keys
const FAMILY_STORAGE_KEY = 'nutribebe_family'

// Age stages (months)
const ageStages = Array.from({ length: 19 }, (_, i) => ({
  value: String(i + 6),
  label: `Mes ${i + 6}`,
  description: i < 3 ? 'Iniciación' : i < 6 ? 'Exploración' : i < 9 ? 'Transición' : 'Consolidación'
}))

// Reaction options
const reactionOptions = [
  { value: 'liked', label: 'Le gustó', icon: ThumbsUp, color: 'text-green-600', bg: 'bg-green-50' },
  { value: 'neutral', label: 'Neutral', icon: MinusCircle, color: 'text-gray-600', bg: 'bg-gray-50' },
  { value: 'disliked', label: 'No le gustó', icon: ThumbsDown, color: 'text-orange-600', bg: 'bg-orange-50' },
  { value: 'allergic', label: 'Reacción alérgica', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
]

export default function NutriBebeApp() {
  // Family/Auth state
  const [family, setFamily] = useState<Family | null>(null)
  const [isLoadingAuth, setIsLoadingAuth] = useState(true)
  const [loginMode, setLoginMode] = useState<'create' | 'join'>('create')
  const [familyName, setFamilyName] = useState('')
  const [babyName, setBabyName] = useState('')
  const [babyBirthDate, setBabyBirthDate] = useState('')
  const [joinCode, setJoinCode] = useState('')
  const [authError, setAuthError] = useState('')
  
  // App state
  const [selectedMonth, setSelectedMonth] = useState(6)
  const [activeSection, setActiveSection] = useState('intro')
  const [introSteps, setIntroSteps] = useState<IntroStep[]>([])
  const [groupedByMonth, setGroupedByMonth] = useState<Record<number, IntroStep[]>>({})
  const [selectedDay, setSelectedDay] = useState(1)
  const [loading, setLoading] = useState(false)
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())
  
  // Reaction state
  const [showReactionForm, setShowReactionForm] = useState(false)
  const [selectedReaction, setSelectedReaction] = useState<'liked' | 'neutral' | 'disliked' | 'allergic' | null>(null)
  const [reactionNotes, setReactionNotes] = useState('')

  // Load family from storage on mount
  useEffect(() => {
    const stored = localStorage.getItem(FAMILY_STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setFamily(parsed)
        if (parsed.baby_birth_date) {
          setBabyBirthDate(parsed.baby_birth_date)
          // Calculate current month based on birth date
          const birthDate = new Date(parsed.baby_birth_date)
          const currentMonth = calculateCurrentMonth(birthDate)
          setSelectedMonth(currentMonth)
        }
      } catch (e) {
        console.error('Error loading family:', e)
      }
    }
    setIsLoadingAuth(false)
  }, [])

  // Load intro steps
  useEffect(() => {
    setIntroSteps(introStepsData)
    setGroupedByMonth(groupStepsByMonth(introStepsData))
  }, [])

  // Create new family
  const createFamily = async () => {
    if (!familyName.trim()) {
      setAuthError('Por favor ingresa un nombre para tu familia')
      return
    }
    
    setAuthError('')
    
    const newFamily: Family = {
      id: `local-${Date.now()}`,
      code: Math.random().toString(36).substring(2, 8).toUpperCase(),
      name: familyName,
      baby_name: babyName || undefined,
      baby_birth_date: babyBirthDate || undefined,
      created_at: new Date().toISOString(),
    }
    
    setFamily(newFamily)
    localStorage.setItem(FAMILY_STORAGE_KEY, JSON.stringify(newFamily))
    
    if (babyBirthDate) {
      const birthDate = new Date(babyBirthDate)
      const currentMonth = calculateCurrentMonth(birthDate)
      setSelectedMonth(currentMonth)
    }
  }

  // Join existing family
  const joinFamily = async () => {
    if (!joinCode.trim()) {
      setAuthError('Por favor ingresa el código de tu familia')
      return
    }
    
    setAuthError('')
    
    // For demo, create a family with the code
    const newFamily: Family = {
      id: `local-${Date.now()}`,
      code: joinCode.toUpperCase(),
      name: `Familia ${joinCode.toUpperCase()}`,
      created_at: new Date().toISOString(),
    }
    
    setFamily(newFamily)
    localStorage.setItem(FAMILY_STORAGE_KEY, JSON.stringify(newFamily))
  }

  // Logout
  const logout = () => {
    setFamily(null)
    localStorage.removeItem(FAMILY_STORAGE_KEY)
  }

  // Copy family code
  const copyCode = () => {
    if (family?.code) {
      navigator.clipboard.writeText(family.code)
    }
  }

  // Update baby birth date
  const updateBirthDate = (date: string) => {
    setBabyBirthDate(date)
    if (family) {
      const updatedFamily = { ...family, baby_birth_date: date }
      setFamily(updatedFamily)
      localStorage.setItem(FAMILY_STORAGE_KEY, JSON.stringify(updatedFamily))
      
      // Recalculate current month
      const birthDate = new Date(date)
      const currentMonth = calculateCurrentMonth(birthDate)
      setSelectedMonth(currentMonth)
    }
  }

  // Get current step data
  const currentMonthSteps = groupedByMonth[selectedMonth] || []
  const currentStep = currentMonthSteps.find(s => s.dayNumber === selectedDay) || currentMonthSteps[0]
  const ageConfig = getAgeConfig(selectedMonth)
  
  // Shopping list for current month
  const shoppingList = calculateMonthlyShoppingList(selectedMonth)
  
  // Calculate baby age info
  const getBabyAgeInfo = () => {
    if (!babyBirthDate) return null
    const birthDate = new Date(babyBirthDate)
    const today = new Date()
    const months = differenceInMonths(today, birthDate)
    return {
      months,
      weeks: Math.floor(months * 4.33),
      displayDate: format(birthDate, "d 'de' MMMM, yyyy", { locale: es })
    }
  }
  
  const babyAge = getBabyAgeInfo()

  // Loading screen
  if (isLoadingAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
      </div>
    )
  }

  // Login/Register screen
  if (!family) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-orange-200 shadow-xl">
          <CardHeader className="text-center bg-gradient-to-r from-orange-100 to-green-50 rounded-t-lg">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center">
                <Baby className="w-12 h-12 text-orange-600" />
              </div>
            </div>
            <CardTitle className="text-2xl text-orange-600">NutriBebé</CardTitle>
            <CardDescription>Guía de alimentación para bebés de 6 a 24 meses</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs value={loginMode} onValueChange={(v) => { setLoginMode(v as 'create' | 'join'); setAuthError('') }}>
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="create">Nueva Familia</TabsTrigger>
                <TabsTrigger value="join">Tengo Código</TabsTrigger>
              </TabsList>
              
              <TabsContent value="create" className="space-y-4">
                <div>
                  <Label htmlFor="familyName">Nombre de la familia *</Label>
                  <Input
                    id="familyName"
                    placeholder="Ej: Familia García"
                    value={familyName}
                    onChange={(e) => setFamilyName(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="babyName">Nombre del bebé</Label>
                  <Input
                    id="babyName"
                    placeholder="Ej: Sofía"
                    value={babyName}
                    onChange={(e) => setBabyName(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="birthDate">Fecha de nacimiento del bebé</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={babyBirthDate}
                    onChange={(e) => setBabyBirthDate(e.target.value)}
                    className="mt-1"
                    max={new Date().toISOString().split('T')[0]}
                    min={addMonths(new Date(), -24).toISOString().split('T')[0]}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Usaremos esta fecha para personalizar la guía según la edad de tu bebé
                  </p>
                </div>
                <Button onClick={createFamily} className="w-full bg-orange-500 hover:bg-orange-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Crear mi familia
                </Button>
              </TabsContent>
              
              <TabsContent value="join" className="space-y-4">
                <div>
                  <Label htmlFor="joinCode">Código de familia</Label>
                  <Input
                    id="joinCode"
                    placeholder="Ej: ABC123"
                    value={joinCode}
                    onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                    className="mt-1 text-center text-xl tracking-widest"
                    maxLength={6}
                  />
                  <p className="text-xs text-gray-500 mt-1 text-center">
                    Ingresa el código de 6 caracteres que te compartieron
                  </p>
                </div>
                <Button onClick={joinFamily} className="w-full bg-orange-500 hover:bg-orange-600">
                  <Key className="w-4 h-4 mr-2" />
                  Unirme a mi familia
                </Button>
              </TabsContent>
            </Tabs>
            
            {authError && (
              <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm">
                {authError}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  // Main App
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50" suppressHydrationWarning>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Baby className="w-7 h-7 text-orange-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-orange-600">NutriBebé</h1>
                <p className="text-xs text-gray-500">{family.name} {babyAge && `• ${babyAge.months} meses`}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Family Code Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-lg border border-green-200">
                <Key className="w-4 h-4 text-green-600" />
                <span className="text-sm font-mono font-bold text-green-700">{family.code}</span>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={copyCode}>
                  <Copy className="w-3 h-3 text-green-600" />
                </Button>
              </div>
              
              {/* Month Selector */}
              <Select value={String(selectedMonth)} onValueChange={(v) => setSelectedMonth(Number(v))}>
                <SelectTrigger className="w-28 bg-white border-orange-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {ageStages.slice(0, 19).map(stage => (
                    <SelectItem key={stage.value} value={stage.value}>
                      {stage.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Logout */}
              <Button variant="ghost" size="sm" onClick={logout} className="text-gray-500">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Navigation */}
          <nav className="mt-3 flex gap-2 overflow-x-auto pb-2">
            {[
              { id: 'intro', label: 'Guía Diaria', icon: Calendar },
              { id: 'shopping', label: 'Lista de Compras', icon: ShoppingCart },
              { id: 'guide', label: 'Info Médica', icon: BookOpen },
            ].map(item => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? 'default' : 'ghost'}
                className={`flex items-center gap-2 ${
                  activeSection === item.id ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'text-gray-600'
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <AnimatePresence mode="wait">
          {/* Intro Guide Section */}
          {activeSection === 'intro' && (
            <motion.div key="intro" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
              
              {/* Baby Age Info Card */}
              {babyAge && (
                <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Cake className="w-5 h-5 text-purple-600" />
                        <div>
                          <p className="font-medium text-purple-800">
                            {family.baby_name || 'Tu bebé'} tiene <strong>{babyAge.months} meses</strong>
                          </p>
                          <p className="text-sm text-purple-600">
                            Nacido el {babyAge.displayDate}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => document.getElementById('birthDateEdit')?.focus()}>
                        Editar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {/* Birth Date Input (if not set) */}
              {!babyBirthDate && (
                <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-center gap-4">
                      <Cake className="w-8 h-8 text-blue-600" />
                      <div className="flex-1">
                        <Label htmlFor="birthDateEdit" className="font-medium text-blue-800">
                          Ingresa la fecha de nacimiento de tu bebé
                        </Label>
                        <Input
                          id="birthDateEdit"
                          type="date"
                          value={babyBirthDate}
                          onChange={(e) => updateBirthDate(e.target.value)}
                          className="mt-2"
                          max={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Month Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Mes {selectedMonth} - {currentStep?.ageRange}</h2>
                <p className="text-gray-500">
                  {ageConfig.mealsPerDay} comidas al día • {currentStep?.developmentalMilestone}
                </p>
              </div>

              {/* Day Selector */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {[1, 2, 3, 4, 5, 6, 7].map(day => (
                  <Button
                    key={day}
                    variant={selectedDay === day ? 'default' : 'outline'}
                    className={selectedDay === day ? 'bg-orange-500 hover:bg-orange-600' : ''}
                    onClick={() => setSelectedDay(day)}
                  >
                    Día {day}
                  </Button>
                ))}
              </div>

              {/* Current Day Card with Multiple Meals */}
              {currentStep && (
                <Card className="border-green-200 bg-white shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-green-100 to-orange-50">
                    <CardTitle className="text-xl text-green-700">{currentStep.title}</CardTitle>
                    <CardDescription className="text-base">{currentStep.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-6">
                    
                    {/* Meals for the day */}
                    {currentStep.meals.map((meal, mealIndex) => (
                      <div key={mealIndex} className="border rounded-xl p-4 bg-gradient-to-r from-orange-25 to-green-25">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-orange-700 flex items-center gap-2">
                            <Utensils className="w-4 h-4" />
                            {meal.title}
                          </h4>
                          <Badge variant="outline" className="text-xs">
                            {meal.type}
                          </Badge>
                        </div>
                        
                        {/* Foods */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {meal.foods.map((food, i) => (
                            <Badge key={i} className="bg-green-100 text-green-800 hover:bg-green-200">
                              {food}
                            </Badge>
                          ))}
                        </div>
                        
                        {/* Recipe */}
                        {meal.recipe && (
                          <div className="mt-3 p-3 bg-white rounded-lg border">
                            <h5 className="font-medium text-gray-800 mb-2">{meal.recipe.name}</h5>
                            
                            <div className="flex gap-4 text-xs text-gray-500 mb-3">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                Prep: {meal.recipe.prepTime} min
                              </span>
                              <span className="flex items-center gap-1">
                                <ChefHat className="w-3 h-3" />
                                Coc: {meal.recipe.cookTime} min
                              </span>
                            </div>
                            
                            <div className="mb-3">
                              <p className="text-xs font-medium text-gray-600 mb-1">Ingredientes:</p>
                              <ul className="text-sm text-gray-700">
                                {meal.recipe.ingredients.map((ing, i) => (
                                  <li key={i} className="flex items-center gap-2">
                                    <Check className="w-3 h-3 text-green-500" />
                                    {ing}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <p className="text-xs font-medium text-gray-600 mb-1">Preparación:</p>
                              <ol className="text-sm text-gray-700 space-y-1">
                                {meal.recipe.instructions.map((step, i) => (
                                  <li key={i} className="flex gap-2">
                                    <span className="flex-shrink-0 w-5 h-5 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center text-xs">
                                      {i + 1}
                                    </span>
                                    {step}
                                  </li>
                                ))}
                              </ol>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                    
                    {/* Tips */}
                    {currentStep.tips && currentStep.tips.length > 0 && (
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-medium text-green-700 mb-2 flex items-center gap-2">
                          <Sparkles className="w-4 h-4" /> Consejos
                        </h4>
                        <ul className="space-y-1">
                          {currentStep.tips.map((tip, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-green-600">
                              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Warnings */}
                    {currentStep.warnings && currentStep.warnings.length > 0 && (
                      <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                        <h4 className="font-medium text-red-700 mb-2 flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4" /> Importante
                        </h4>
                        <ul className="space-y-1">
                          {currentStep.warnings.map((warning, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-red-600">
                              <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                              <span>{warning}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </motion.div>
          )}

          {/* Shopping List Section */}
          {activeSection === 'shopping' && (
            <motion.div key="shopping" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Lista de Compras - Mes {selectedMonth}</h2>
                <p className="text-gray-500">{shoppingList.ageRange} • Estimado: {shoppingList.weeklyBudget}</p>
              </div>

              {/* Month Selector for Shopping */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {Array.from({ length: 19 }, (_, i) => i + 6).map(month => (
                  <Button
                    key={month}
                    variant={selectedMonth === month ? 'default' : 'outline'}
                    className={selectedMonth === month ? 'bg-orange-500 hover:bg-orange-600' : ''}
                    onClick={() => setSelectedMonth(month)}
                  >
                    Mes {month}
                  </Button>
                ))}
              </div>

              {/* Shopping List by Category */}
              {(['Verduras', 'Frutas', 'Proteínas', 'Cereales', 'Lácteos'] as const).map(category => {
                const categoryItems = shoppingList.items.filter(item => item.category === category)
                if (categoryItems.length === 0) return null
                
                return (
                  <Card key={category} className="border-gray-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <span className="text-2xl">{categoryIcons[category]}</span>
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-2">
                      <div className="space-y-2">
                        {categoryItems.map((item, i) => (
                          <div 
                            key={i}
                            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                              checkedItems.has(item.name) ? 'bg-green-50' : 'bg-gray-50 hover:bg-gray-100'
                            }`}
                            onClick={() => {
                              setCheckedItems(prev => {
                                const newSet = new Set(prev)
                                if (newSet.has(item.name)) {
                                  newSet.delete(item.name)
                                } else {
                                  newSet.add(item.name)
                                }
                                return newSet
                              })
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                                checkedItems.has(item.name) ? 'bg-green-500 border-green-500' : 'border-gray-300'
                              }`}>
                                {checkedItems.has(item.name) && <Check className="w-3 h-3 text-white" />}
                              </div>
                              <div>
                                <p className={`font-medium ${checkedItems.has(item.name) ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                                  {item.name}
                                </p>
                                <p className="text-sm text-gray-500">{item.quantity}</p>
                              </div>
                            </div>
                            {item.notes && (
                              <p className="text-xs text-gray-400">{item.notes}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
              
              {/* Progress */}
              <Card className="border-green-200 bg-gradient-to-r from-green-50 to-orange-50">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {checkedItems.size} de {shoppingList.items.length} productos
                    </span>
                    <span className="text-sm text-green-600">
                      {Math.round((checkedItems.size / shoppingList.items.length) * 100)}%
                    </span>
                  </div>
                  <Progress value={(checkedItems.size / shoppingList.items.length) * 100} className="h-2" />
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Medical Guide Section */}
          {activeSection === 'guide' && (
            <motion.div key="guide" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Información Médica</h2>
                <p className="text-gray-500">Guía basada en recomendaciones de la OMS y UNICEF</p>
              </div>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                    Alimentos a evitar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                      <div>
                        <strong>Miel:</strong> No antes de los 12 meses (riesgo de botulismo)
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                      <div>
                        <strong>Sal y azúcar:</strong> Evitar añadirlas antes del año
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                      <div>
                        <strong>Leche de vaca:</strong> Como bebida principal, no antes de 12 meses
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                      <div>
                        <strong>Alimentos con riesgo de atragantamiento:</strong> Nueces enteras, uvas enteras, salchichas
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Señales de preparación para sólidos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Mantiene la cabeza erguida y estable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Se sienta con apoyo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Muestra interés en la comida</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Puede llevar objetos a la boca</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                      <span>Ha perdido el reflejo de extrusión (sacar la lengua)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

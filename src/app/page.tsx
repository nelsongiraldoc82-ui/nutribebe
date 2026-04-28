'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Baby, Utensils, ChefHat, BookOpen, Sparkles, 
  Clock, AlertTriangle, CheckCircle,
  Calendar, Heart, ThumbsUp, ThumbsDown, AlertCircle,
  MinusCircle, MessageSquare, LogOut, Copy, Share2,
  Key, Plus, ShoppingCart, Check, Settings, Sun, Moon
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
import { introStepsData, groupStepsByMonth, getAgeRangeForMonth, type IntroStep, ageRangeInfo } from '@/lib/intro-steps-data'
import { calculateShoppingListByMonth, getAvailableMonths, categoryIcons, getMonthSummary, type ShoppingItem } from '@/lib/shopping-list'

// Types
interface BabyReaction {
  id: string
  family_id: string
  intro_step_id: string
  food_name: string
  reaction: 'liked' | 'neutral' | 'disliked' | 'allergic'
  notes?: string
  include_in_diet: boolean
  reaction_date: string
}

interface Family {
  id: string
  code: string
  name: string
  baby_name?: string
  baby_birth_date?: string // Fecha de nacimiento del bebé
  created_at: string
}

// Storage keys
const FAMILY_STORAGE_KEY = 'nutribebe_family'
const REACTIONS_STORAGE_KEY = 'nutribebe_reactions'

// Generate random family code
function generateFamilyCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

// Generate unique ID
function generateId(): string {
  return `local-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

// Reaction options
const reactionOptions = [
  { value: 'liked', label: 'Le gustó', icon: ThumbsUp, color: 'text-green-600', bg: 'bg-green-50' },
  { value: 'neutral', label: 'Neutral', icon: MinusCircle, color: 'text-gray-600', bg: 'bg-gray-50' },
  { value: 'disliked', label: 'No le gustó', icon: ThumbsDown, color: 'text-orange-600', bg: 'bg-orange-50' },
  { value: 'allergic', label: 'Reacción alérgica', icon: AlertCircle, color: 'text-red-600', bg: 'bg-red-50' },
]

// Predefined recipes for common ingredients
const predefinedRecipes: Record<string, Array<{name: string, ingredients: string[], instructions: string[]}>> = {
  'Calabacín': [
    { name: 'Puré de Calabacín', ingredients: ['Calabacín', 'Agua'], instructions: ['Lavar y pelar el calabacín', 'Cortar en trozos pequeños', 'Cocinar al vapor 10-15 min', 'Triturar hasta obtener puré suave'] }
  ],
  'Calabaza': [
    { name: 'Crema de Calabaza', ingredients: ['Calabaza', 'Agua'], instructions: ['Pelar y cortar la calabaza', 'Cocinar al vapor 20 min', 'Triturar con un poco de agua de cocción', 'Servir tibio'] }
  ],
  'Zanahoria': [
    { name: 'Puré de Zanahoria', ingredients: ['Zanahoria', 'Agua'], instructions: ['Pelar y cortar la zanahoria', 'Hervir o cocinar al vapor 25 min', 'Triturar muy bien', 'Dejar enfriar antes de servir'] }
  ],
  'Pera': [
    { name: 'Compota de Pera', ingredients: ['Pera madura'], instructions: ['Pelar y quitar semillas', 'Cortar en trozos', 'Cocinar con poca agua 10 min', 'Triturar hasta obtener puré'] }
  ],
  'Manzana': [
    { name: 'Puré de Manzana', ingredients: ['Manzana', 'Agua'], instructions: ['Pelar y quitar el corazón', 'Cortar en trozos', 'Cocinar al vapor 15 min', 'Triturar hasta obtener textura suave'] }
  ],
  'Plátano': [
    { name: 'Papilla de Plátano', ingredients: ['Plátano maduro'], instructions: ['Pelar el plátano', 'Aplastar con un tenedor', 'Mezclar hasta obtener puré', 'Servir inmediatamente'] }
  ],
  'Pollo': [
    { name: 'Puré de Pollo con Verduras', ingredients: ['Pollo', 'Calabacín', 'Zanahoria'], instructions: ['Cocinar el pollo a la plancha o hervido', 'Cocinar las verduras al vapor', 'Triturar todo junto', 'Añadir agua si es necesario'] }
  ],
  'Pechuga de pollo': [
    { name: 'Puré de Pollo', ingredients: ['Pechuga de pollo', 'Agua'], instructions: ['Cocinar la pechuga al vapor o hervida', 'Desmenuzar bien', 'Triturar con caldo o agua', 'Servir tibio'] }
  ],
  'Merluza': [
    { name: 'Puré de Merluza', ingredients: ['Merluza', 'Patata', 'Agua'], instructions: ['Cocinar el pescado al vapor 8-10 min', 'Cocinar patata aparte', 'Triturar todo junto', 'Verificar que no haya espinas'] }
  ],
  'Yogur natural': [
    { name: 'Yogur con Frutas', ingredients: ['Yogur natural', 'Fruta triturada'], instructions: ['Elegir yogur natural sin azúcar', 'Añadir fruta triturada', 'Mezclar bien', 'Servir fresco'] }
  ],
  'Lentejas': [
    { name: 'Puré de Lentejas', ingredients: ['Lentejas', 'Zanahoria', 'Patata'], instructions: ['Cocer lentejas 30 min', 'Añadir verduras troceadas', 'Cocinar hasta que estén blandas', 'Triturar hasta obtener puré'] }
  ],
  'Huevo': [
    { name: 'Yema de Huevo Cocida', ingredients: ['Huevo'], instructions: ['Hervir el huevo 10 minutos', 'Separar la yema', 'Aplastar con tenedor', 'Mezclar con puré o caldo'] }
  ],
}

// Calcular edad del bebé en meses
function calculateBabyAgeInMonths(birthDate: Date): number {
  const today = new Date()
  const monthsDiff = (today.getFullYear() - birthDate.getFullYear()) * 12 + (today.getMonth() - birthDate.getMonth())
  return monthsDiff
}

// Calcular día actual basado en la fecha de nacimiento
function calculateCurrentDayFromBirth(birthDate: Date): number {
  const today = new Date()
  const sixMonthsOld = new Date(birthDate)
  sixMonthsOld.setMonth(sixMonthsOld.getMonth() + 6)
  
  if (today < sixMonthsOld) {
    return 0 // Aún no cumplió 6 meses
  }
  
  const daysSinceSixMonths = Math.floor((today.getTime() - sixMonthsOld.getTime()) / (1000 * 60 * 60 * 24))
  return daysSinceSixMonths + 1
}

export default function NutriBebeApp() {
  // Family/Auth state
  const [family, setFamily] = useState<Family | null>(null)
  const [isLoadingAuth, setIsLoadingAuth] = useState(true)
  const [loginMode, setLoginMode] = useState<'create' | 'join'>('create')
  const [familyName, setFamilyName] = useState('')
  const [babyName, setBabyName] = useState('')
  const [joinCode, setJoinCode] = useState('')
  const [authError, setAuthError] = useState('')
  
  // App state
  const [activeSection, setActiveSection] = useState('intro')
  const [introSteps, setIntroSteps] = useState<IntroStep[]>([])
  const [groupedSteps, setGroupedSteps] = useState<Record<number, IntroStep[]>>({})
  const [selectedMonth, setSelectedMonth] = useState(6) // Mes seleccionado (6-24)
  const [selectedDay, setSelectedDay] = useState(1)
  const [ingredientInput, setIngredientInput] = useState('')
  const [showSettings, setShowSettings] = useState(false)
  const [tempBirthDate, setTempBirthDate] = useState('')
  
  // Shopping list state
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())
  const [selectedShoppingMonth, setSelectedShoppingMonth] = useState(6)

  // Load family from storage on mount
  useEffect(() => {
    const stored = localStorage.getItem(FAMILY_STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setFamily(parsed)
        if (parsed.baby_birth_date) {
          setTempBirthDate(parsed.baby_birth_date)
        }
      } catch (e) {
        console.error('Error loading family:', e)
      }
    }
    setIsLoadingAuth(false)
  }, [])

  // Load intro steps and group by month
  useEffect(() => {
    setIntroSteps(introStepsData)
    setGroupedSteps(groupStepsByMonth(introStepsData))
  }, [])

  // Auto-sync with baby's birth date
  useEffect(() => {
    if (family?.baby_birth_date) {
      const birthDate = new Date(family.baby_birth_date)
      const ageInMonths = calculateBabyAgeInMonths(birthDate)
      const currentDay = calculateCurrentDayFromBirth(birthDate)
      
      // Si el bebé tiene entre 6 y 24 meses, sincronizar automáticamente
      if (ageInMonths >= 6 && ageInMonths <= 24) {
        setSelectedMonth(ageInMonths)
        setSelectedShoppingMonth(ageInMonths)
        
        // Calcular el día dentro del mes actual
        // Ejemplo: si tiene 6 meses y 15 días, está en el día 15 del mes 6
        if (currentDay > 0) {
          const dayInMonth = ((currentDay - 1) % 30) + 1
          setSelectedDay(dayInMonth)
        }
      }
    }
  }, [family?.baby_birth_date])

  // Get available months from the data
  const availableMonths = getAvailableMonths()

  // Get current step based on selected month/day
  const getCurrentStep = (): IntroStep | null => {
    const monthSteps = groupedSteps[selectedMonth] || []
    // Encontrar el paso para el día específico dentro del mes
    const stepIndex = selectedDay - 1
    return monthSteps[stepIndex] || monthSteps[0] || null
  }

  const currentStep = getCurrentStep()

  // Get age range info for current month
  const currentAgeRange = getAgeRangeForMonth(selectedMonth)
  const ageInfo = ageRangeInfo[currentAgeRange]

  // Calculate shopping list for selected month
  const shoppingList = calculateShoppingListByMonth(selectedShoppingMonth, introSteps)
  
  // Group shopping list by category
  const categories = ['Verduras', 'Frutas', 'Proteínas', 'Lácteos', 'Cereales', 'Legumbres', 'Otros']

  // Parse JSON strings
  const parseJson = (str: string | undefined): string[] => {
    if (!str) return []
    try {
      return JSON.parse(str)
    } catch {
      return [str]
    }
  }

  // Toggle shopping item
  const toggleItem = (itemName: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(itemName)) {
        newSet.delete(itemName)
      } else {
        newSet.add(itemName)
      }
      return newSet
    })
  }

  // Save family to storage
  const saveFamily = (familyData: Family) => {
    localStorage.setItem(FAMILY_STORAGE_KEY, JSON.stringify(familyData))
    setFamily(familyData)
  }

  // Create family
  const handleCreateFamily = () => {
    if (!familyName.trim()) {
      setAuthError('Por favor ingresa un nombre para la familia')
      return
    }
    
    const newFamily: Family = {
      id: generateId(),
      code: generateFamilyCode(),
      name: familyName.trim(),
      baby_name: babyName.trim() || undefined,
      baby_birth_date: tempBirthDate || undefined,
      created_at: new Date().toISOString()
    }
    
    saveFamily(newFamily)
    setAuthError('')
  }

  // Join family
  const handleJoinFamily = () => {
    if (!joinCode.trim()) {
      setAuthError('Por favor ingresa el código de familia')
      return
    }
    
    // For demo, just create a family with the code
    const newFamily: Family = {
      id: generateId(),
      code: joinCode.trim().toUpperCase(),
      name: `Familia ${joinCode.trim().toUpperCase()}`,
      baby_birth_date: tempBirthDate || undefined,
      created_at: new Date().toISOString()
    }
    
    saveFamily(newFamily)
    setAuthError('')
  }

  // Update baby birth date
  const handleUpdateBirthDate = () => {
    if (family && tempBirthDate) {
      const updatedFamily = { ...family, baby_birth_date: tempBirthDate }
      saveFamily(updatedFamily)
      setShowSettings(false)
      
      // Calcular mes basado en la edad
      const birthDate = new Date(tempBirthDate)
      const ageMonths = calculateBabyAgeInMonths(birthDate)
      if (ageMonths >= 6 && ageMonths <= 24) {
        setSelectedMonth(ageMonths)
        setSelectedShoppingMonth(ageMonths)
      }
    }
  }

  // Logout
  const handleLogout = () => {
    localStorage.removeItem(FAMILY_STORAGE_KEY)
    localStorage.removeItem(REACTIONS_STORAGE_KEY)
    setFamily(null)
  }

  // Calculate baby's age if birth date is set
  const babyAgeMonths = family?.baby_birth_date ? calculateBabyAgeInMonths(new Date(family.baby_birth_date)) : null
  const babyCurrentDay = family?.baby_birth_date ? calculateCurrentDayFromBirth(new Date(family.baby_birth_date)) : null

  // Auth Screen
  if (isLoadingAuth) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
      </div>
    )
  }

  if (!family) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white p-4 flex flex-col items-center justify-center">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <Baby className="w-16 h-16 mx-auto text-orange-500 mb-4" />
            <h1 className="text-3xl font-bold text-gray-800">NutriBebé</h1>
            <p className="text-gray-600 mt-2">Guía de alimentación para tu bebé</p>
          </div>

          <Card className="border-orange-200">
            <CardHeader>
              <Tabs value={loginMode} onValueChange={(v) => setLoginMode(v as 'create' | 'join')}>
                <TabsList className="grid grid-cols-2 w-full">
                  <TabsTrigger value="create">Crear Familia</TabsTrigger>
                  <TabsTrigger value="join">Unirse</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent className="space-y-4">
              {loginMode === 'create' ? (
                <>
                  <div>
                    <Label htmlFor="familyName">Nombre de la familia</Label>
                    <Input
                      id="familyName"
                      value={familyName}
                      onChange={(e) => setFamilyName(e.target.value)}
                      placeholder="Ej: Familia García"
                    />
                  </div>
                  <div>
                    <Label htmlFor="babyName">Nombre del bebé (opcional)</Label>
                    <Input
                      id="babyName"
                      value={babyName}
                      onChange={(e) => setBabyName(e.target.value)}
                      placeholder="Ej: Sofía"
                    />
                  </div>
                  <div>
                    <Label htmlFor="birthDate">Fecha de nacimiento del bebé</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={tempBirthDate}
                      onChange={(e) => setTempBirthDate(e.target.value)}
                    />
                    <p className="text-xs text-gray-500 mt-1">Para sincronizar la guía con la edad de tu bebé</p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <Label htmlFor="joinCode">Código de familia</Label>
                    <Input
                      id="joinCode"
                      value={joinCode}
                      onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                      placeholder="Ej: ABC123"
                      maxLength={6}
                    />
                  </div>
                  <div>
                    <Label htmlFor="birthDate2">Fecha de nacimiento del bebé</Label>
                    <Input
                      id="birthDate2"
                      type="date"
                      value={tempBirthDate}
                      onChange={(e) => setTempBirthDate(e.target.value)}
                    />
                  </div>
                </>
              )}

              {authError && (
                <p className="text-red-500 text-sm">{authError}</p>
              )}

              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600"
                onClick={loginMode === 'create' ? handleCreateFamily : handleJoinFamily}
              >
                {loginMode === 'create' ? 'Crear Familia' : 'Unirse'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Baby className="w-8 h-8 text-orange-500" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">NutriBebé</h1>
              <p className="text-xs text-gray-500">{family.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {family.baby_name && (
              <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                {family.baby_name}
                {babyAgeMonths !== null && babyAgeMonths >= 6 && ` - ${babyAgeMonths} meses`}
              </Badge>
            )}
            <Button variant="ghost" size="icon" onClick={() => setShowSettings(!showSettings)}>
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleLogout}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="max-w-md w-full">
            <CardHeader>
              <CardTitle>Configuración</CardTitle>
              <CardDescription>Actualiza la información de tu bebé</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="settingsBirthDate">Fecha de nacimiento del bebé</Label>
                <Input
                  id="settingsBirthDate"
                  type="date"
                  value={tempBirthDate}
                  onChange={(e) => setTempBirthDate(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setShowSettings(false)} className="flex-1">
                  Cancelar
                </Button>
                <Button onClick={handleUpdateBirthDate} className="flex-1 bg-orange-500 hover:bg-orange-600">
                  Guardar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Tabs value={activeSection} onValueChange={setActiveSection}>
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-6">
            <TabsTrigger value="intro" className="flex items-center gap-2">
              <Utensils className="w-4 h-4" />
              <span className="hidden sm:inline">Guía</span>
            </TabsTrigger>
            <TabsTrigger value="shopping" className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Compras</span>
            </TabsTrigger>
            <TabsTrigger value="info" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Info</span>
            </TabsTrigger>
          </TabsList>

          {/* Introduction Tab */}
          <TabsContent value="intro">
            {/* Age Range Banner */}
            <Card className={`mb-6 ${ageInfo?.bgClass} ${ageInfo?.borderClass} border`}>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{ageInfo?.icon}</span>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-800">
                      {ageInfo?.title}
                    </h2>
                    <p className="text-gray-600">{ageInfo?.subtitle}</p>
                    <p className="text-sm text-gray-500 mt-1">{ageInfo?.description}</p>
                  </div>
                  <div className="text-right">
                    <Badge className={`${ageInfo?.bgClass} ${ageInfo?.textClass} border`}>
                      {ageInfo?.mealsPerDay} {ageInfo?.mealsPerDay === 1 ? 'comida/día' : 'comidas/día'}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Month Selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  Selecciona el Mes
                </h3>
                {family?.baby_birth_date && babyAgeMonths && babyAgeMonths >= 6 && babyAgeMonths <= 24 && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-orange-600 border-orange-300 hover:bg-orange-50"
                    onClick={() => {
                      const birthDate = new Date(family.baby_birth_date!)
                      const currentDay = calculateCurrentDayFromBirth(birthDate)
                      setSelectedMonth(babyAgeMonths)
                      setSelectedShoppingMonth(babyAgeMonths)
                      if (currentDay > 0) {
                        const dayInMonth = ((currentDay - 1) % 30) + 1
                        setSelectedDay(dayInMonth)
                      }
                    }}
                  >
                    📍 Ir a hoy
                  </Button>
                )}
              </div>
              {family?.baby_birth_date && babyAgeMonths && babyAgeMonths >= 6 && babyAgeMonths <= 24 && selectedMonth === babyAgeMonths && (
                <div className="mb-3 p-2 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Sincronizado con la edad de {family.baby_name || 'tu bebé'} ({babyAgeMonths} meses)</span>
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {availableMonths.map(month => {
                  const monthAgeRange = getAgeRangeForMonth(month)
                  const monthAgeInfo = ageRangeInfo[monthAgeRange]
                  const isSelected = selectedMonth === month
                  const isCurrentMonth = babyAgeMonths === month
                  
                  return (
                    <Button
                      key={month}
                      variant={isSelected ? 'default' : 'outline'}
                      className={`${isSelected ? 'bg-orange-500 hover:bg-orange-600' : ''} ${isCurrentMonth && !isSelected ? 'border-green-400 border-2' : ''} flex flex-col items-center py-2 h-auto relative`}
                      onClick={() => setSelectedMonth(month)}
                    >
                      {isCurrentMonth && <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full" />}
                      <span className="font-semibold">Mes {month}</span>
                      <span className="text-xs opacity-75">{monthAgeInfo?.subtitle}</span>
                    </Button>
                  )
                })}
              </div>
            </div>

            {/* Day Selector */}
            {groupedSteps[selectedMonth] && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Día del Mes</h3>
                <div className="flex flex-wrap gap-2">
                  {groupedSteps[selectedMonth].map((step, index) => {
                    const birthDate = family?.baby_birth_date ? new Date(family.baby_birth_date) : null
                    const currentDay = birthDate ? calculateCurrentDayFromBirth(birthDate) : null
                    const currentDayInMonth = currentDay ? ((currentDay - 1) % 30) + 1 : null
                    const isCurrentDay = currentDayInMonth === index + 1 && selectedMonth === babyAgeMonths
                    
                    return (
                      <Button
                        key={step.id}
                        variant={selectedDay === index + 1 ? 'default' : 'outline'}
                        size="sm"
                        className={`${selectedDay === index + 1 ? 'bg-orange-500 hover:bg-orange-600' : ''} ${isCurrentDay && selectedDay !== index + 1 ? 'border-green-400 border-2' : ''} relative`}
                        onClick={() => setSelectedDay(index + 1)}
                      >
                        {isCurrentDay && <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full" />}
                        Día {index + 1}
                      </Button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Current Step Content */}
            {currentStep && (
              <Card className="border-orange-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge variant="secondary" className="mb-2">
                        Mes {currentStep.monthNumber} | {ageRangeInfo[currentStep.ageRange]?.title}
                      </Badge>
                      <CardTitle className="text-xl">{currentStep.title}</CardTitle>
                    </div>
                    <span className="text-3xl">{ageRangeInfo[currentStep.ageRange]?.icon}</span>
                  </div>
                  <CardDescription>{currentStep.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Meals Section */}
                  {currentStep.meals && currentStep.meals.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                        <Utensils className="w-5 h-5 text-orange-500" />
                        Comidas del Día ({currentStep.mealsPerDay} {currentStep.mealsPerDay === 1 ? 'comida' : 'comidas'})
                      </h4>
                      {currentStep.meals.map((meal, mealIndex) => (
                        <Card key={mealIndex} className="border-gray-200">
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-2">
                              {meal.type === 'desayuno' && <Sun className="w-5 h-5 text-yellow-500" />}
                              {meal.type === 'almuerzo' && <Sun className="w-5 h-5 text-orange-400" />}
                              {meal.type === 'merienda' && <Sun className="w-5 h-5 text-amber-400" />}
                              {meal.type === 'cena' && <Moon className="w-5 h-5 text-indigo-400" />}
                              <CardTitle className="text-base">{meal.title}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div>
                              <p className="text-sm text-gray-500">Alimento</p>
                              <p className="font-medium">{meal.food}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Porción</p>
                              <p className="font-medium">{meal.portion}</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-sm text-gray-500 mb-1 flex items-center gap-2">
                                <ChefHat className="w-4 h-4" />
                                Preparación
                              </p>
                              <p className="text-sm">{meal.recipe}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}

                  {/* Legacy: Specific Food (for backwards compatibility) */}
                  {currentStep.specificFood && !currentStep.meals?.length && (
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <p className="font-medium text-orange-700">Alimento:</p>
                      <p className="text-lg text-orange-800">{currentStep.specificFood}</p>
                    </div>
                  )}

                  {/* Portion Size */}
                  {currentStep.portionSize && (
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-2 text-blue-700 mb-1">
                        <Utensils className="w-4 h-4" />
                        <span className="font-medium">Porción</span>
                      </div>
                      <p className="text-sm text-gray-600">{currentStep.portionSize}</p>
                    </div>
                  )}

                  {/* Frequency */}
                  {currentStep.frequency && (
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="flex items-center gap-2 text-purple-700 mb-1">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">Frecuencia</span>
                      </div>
                      <p className="text-sm text-gray-600">{currentStep.frequency}</p>
                    </div>
                  )}

                  {/* Tips */}
                  {currentStep.tips && (
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-700 mb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" /> Consejos
                      </h4>
                      <ul className="space-y-1">
                        {parseJson(currentStep.tips).map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-green-600">
                            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Warnings */}
                  {currentStep.warnings && (
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <h4 className="font-medium text-red-700 mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4" /> Importante
                      </h4>
                      <ul className="space-y-1">
                        {parseJson(currentStep.warnings).map((warning, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-red-600">
                            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>{warning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Breastmilk Note */}
                  {currentStep.breastmilkNote && (
                    <div className="p-4 bg-pink-50 rounded-lg">
                      <p className="text-sm text-pink-700 flex items-center gap-2">
                        <Heart className="w-4 h-4" />
                        {currentStep.breastmilkNote}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Recipe Section */}
            {currentStep?.specificFood && predefinedRecipes[currentStep.specificFood] && (
              <Card className="mt-6 border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <ChefHat className="w-5 h-5 text-green-600" />
                    Recetas para {currentStep.specificFood}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {predefinedRecipes[currentStep.specificFood].map((recipe, idx) => (
                    <div key={idx} className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">{recipe.name}</h4>
                      <div className="mb-2">
                        <p className="text-sm text-gray-500">Ingredientes:</p>
                        <p className="text-sm">{recipe.ingredients.join(', ')}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Preparación:</p>
                        <ol className="list-decimal list-inside text-sm space-y-1">
                          {recipe.instructions.map((inst, i) => (
                            <li key={i}>{inst}</li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Shopping Tab */}
          <TabsContent value="shopping">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-orange-500" />
                  Lista de Compras - Mes {selectedShoppingMonth}
                </CardTitle>
                <CardDescription>
                  Todos los ingredientes necesarios para el mes seleccionado
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Month Selector for Shopping */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-700">Selecciona el Mes:</h4>
                    {family?.baby_birth_date && babyAgeMonths && babyAgeMonths >= 6 && babyAgeMonths <= 24 && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-orange-600 border-orange-300"
                        onClick={() => setSelectedShoppingMonth(babyAgeMonths!)}
                      >
                        📍 Mi mes actual
                      </Button>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {availableMonths.map(month => {
                      const isCurrentMonth = babyAgeMonths === month
                      return (
                        <Button
                          key={month}
                          variant={selectedShoppingMonth === month ? 'default' : 'outline'}
                          className={`${selectedShoppingMonth === month ? 'bg-orange-500 hover:bg-orange-600' : ''} ${isCurrentMonth && selectedShoppingMonth !== month ? 'border-green-400 border-2' : ''} relative`}
                          onClick={() => setSelectedShoppingMonth(month)}
                        >
                          {isCurrentMonth && <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full" />}
                          Mes {month}
                        </Button>
                      )
                    })}
                  </div>
                </div>

                {/* Shopping List Summary */}
                {shoppingList.length > 0 && (
                  <div className="mb-4 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-orange-700 font-semibold text-lg">
                        {shoppingList.length} productos para el mes completo
                      </span>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                        {checkedItems.size}/{shoppingList.length} ✓
                      </Badge>
                    </div>
                    {/* Total estimado */}
                    {(() => {
                      const summary = getMonthSummary(selectedShoppingMonth, introSteps)
                      const totalKg = (summary.totalGrams / 1000).toFixed(1)
                      return (
                        <div className="mb-3 p-2 bg-white rounded-lg border border-orange-100">
                          <p className="text-sm text-orange-700">
                            📊 <strong>Total estimado:</strong> {summary.uniqueFoods} alimentos diferentes | ~{totalKg}kg de comida
                          </p>
                          <p className="text-xs text-orange-600 mt-1">
                            {summary.totalDays} días | {summary.totalMeals} comidas
                          </p>
                        </div>
                      )
                    })()}
                    <div className="flex flex-wrap gap-2 text-sm">
                      {categories.map(cat => {
                        const categoryItems = shoppingList.filter(i => i.category === cat)
                        const totalCatGrams = categoryItems.reduce((sum, i) => sum + (i.totalGrams || i.quantityGrams), 0)
                        if (categoryItems.length === 0) return null
                        return (
                          <Badge key={cat} variant="outline" className="bg-white">
                            {categoryIcons[cat]} {cat}: {categoryItems.length} ({(totalCatGrams/1000).toFixed(1)}kg)
                          </Badge>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Shopping List by Category */}
                {shoppingList.length === 0 ? (
                  <Card className="border-orange-200 bg-orange-50">
                    <CardContent className="p-6 text-center">
                      <ShoppingCart className="w-12 h-12 mx-auto text-orange-300 mb-3" />
                      <p className="text-orange-700 font-medium">No hay datos de alimentos para este mes</p>
                      <p className="text-sm text-orange-600 mt-1">Selecciona otro mes o verifica los datos</p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-4">
                    {categories.map(category => {
                      const categoryItems = shoppingList.filter(item => item.category === category)
                      if (categoryItems.length === 0) return null
                      
                      return (
                        <Card key={category} className="border-gray-200 shadow-sm">
                          <CardHeader className="pb-2 bg-gray-50">
                            <CardTitle className="text-base flex items-center gap-2">
                              <span className="text-2xl">{categoryIcons[category]}</span>
                              {category}
                              <Badge variant="secondary" className="ml-auto">{categoryItems.length} items</Badge>
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="pt-3 space-y-2">
                            {categoryItems.map((item) => (
                              <div
                                key={item.name}
                                className={`p-3 rounded-lg cursor-pointer transition-all ${
                                  checkedItems.has(item.name) 
                                    ? 'bg-green-50 border border-green-200' 
                                    : 'bg-white border border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                                }`}
                                onClick={() => toggleItem(item.name)}
                              >
                                <div className="flex items-start gap-3">
                                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                    checkedItems.has(item.name) 
                                      ? 'bg-green-500 border-green-500' 
                                      : 'border-gray-300'
                                  }`}>
                                    {checkedItems.has(item.name) && <Check className="w-4 h-4 text-white" />}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                      <p className={`font-medium ${checkedItems.has(item.name) ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                                        {item.icon} {item.name}
                                      </p>
                                    </div>
                                    <p className={`text-sm font-medium ${checkedItems.has(item.name) ? 'text-gray-400' : 'text-orange-600'}`}>
                                      {item.quantity}
                                    </p>
                                    {item.daysUsed && item.daysUsed.length > 0 && (
                                      <p className="text-xs text-gray-500 mt-1">
                                        📅 Días: {item.daysUsed.slice(0, 5).join(', ')}{item.daysUsed.length > 5 ? ` (+${item.daysUsed.length - 5} más)` : ''}
                                      </p>
                                    )}
                                    {item.notes && (
                                      <p className="text-xs text-gray-400 mt-1">
                                        💡 {item.notes}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Info Tab */}
          <TabsContent value="info">
            <div className="space-y-6">
              {/* Age Ranges Info */}
              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Baby className="w-5 h-5 text-orange-500" />
                    Rangos de Edad
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(ageRangeInfo).map(([key, info]) => (
                    <div key={key} className={`p-4 rounded-lg ${info.bgClass} ${info.borderClass} border`}>
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{info.icon}</span>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800">{info.title}</h3>
                          <p className="text-sm text-gray-600">{info.subtitle}</p>
                          <p className="text-sm text-gray-500 mt-1">{info.description}</p>
                        </div>
                        <Badge className={`${info.bgClass} ${info.textClass} border`}>
                          {info.mealsPerDay} {info.mealsPerDay === 1 ? 'comida/día' : 'comidas/día'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* WHO Recommendations */}
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-700 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Recomendaciones OMS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-600">La OMS recomienda iniciar la alimentación complementaria a los 6 meses, manteniendo la lactancia materna hasta al menos los 2 años.</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-yellow-700 mt-1">Introduce alérgenos comunes (huevo, pescado, frutos secos) a partir de los 6 meses, sin retrasar su introducción.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Allergen Info */}
              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-700 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Introducción de Alérgenos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">🥚 Huevo (yema desde los 6-7 meses, clara desde los 12 meses)</li>
                    <li className="flex items-center gap-2">🐟 Pescado (desde los 9-10 meses)</li>
                    <li className="flex items-center gap-2">🥜 Frutos secos (en forma de crema, desde los 12 meses)</li>
                    <li className="flex items-center gap-2">🥛 Lácteos (yogur y queso desde los 9-12 meses)</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Prohibited Foods */}
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Alimentos Prohibidos antes de los 12 meses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-red-600">🍯 Miel (riesgo de botulismo)</li>
                    <li className="flex items-center gap-2 text-red-600">🧂 Sal añadida</li>
                    <li className="flex items-center gap-2 text-red-600">🍬 Azúcar añadida</li>
                    <li className="flex items-center gap-2 text-red-600">🥛 Leche de vaca como bebida principal</li>
                    <li className="flex items-center gap-2 text-red-600">🐟 Pescados crudos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

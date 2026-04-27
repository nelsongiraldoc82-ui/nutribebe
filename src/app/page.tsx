'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Baby, Utensils, ChefHat, BookOpen, Sparkles, 
  Clock, AlertTriangle, CheckCircle,
  Calendar, Heart, ThumbsUp, ThumbsDown, AlertCircle,
  MinusCircle, MessageSquare, LogOut, Copy, Share2,
  Key, Plus, ShoppingCart, Check
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
import { introStepsData, groupStepsByWeek, type IntroStep } from '@/lib/intro-steps-data'
import { calculateShoppingList, getShoppingPeriod, type ShoppingItem } from '@/lib/shopping-list'

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

// Age stages
const ageStages = [
  { value: '6', label: '6-8 meses', description: 'Iniciación' },
  { value: '8', label: '8-10 meses', description: 'Exploración' },
  { value: '10', label: '10-12 meses', description: 'Transición' },
]

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
  const [selectedAge, setSelectedAge] = useState('6')
  const [activeSection, setActiveSection] = useState('intro')
  const [introSteps, setIntroSteps] = useState<IntroStep[]>([])
  const [groupedSteps, setGroupedSteps] = useState<Record<number, IntroStep[]>>({})
  const [selectedWeek, setSelectedWeek] = useState(1)
  const [currentDay, setCurrentDay] = useState(1)
  const [ingredientInput, setIngredientInput] = useState('')
  
  // Reaction state
  const [showReactionForm, setShowReactionForm] = useState(false)
  const [selectedReaction, setSelectedReaction] = useState<'liked' | 'neutral' | 'disliked' | 'allergic' | null>(null)
  const [reactionNotes, setReactionNotes] = useState('')
  const [savedReactions, setSavedReactions] = useState<Record<string, BabyReaction>>({})
  
  // Shopping list state
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())

  // Load family from storage on mount
  useEffect(() => {
    const stored = localStorage.getItem(FAMILY_STORAGE_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setFamily(parsed)
      } catch (e) {
        console.error('Error loading family:', e)
      }
    }
    setIsLoadingAuth(false)
  }, [])

  // Load intro steps
  useEffect(() => {
    setIntroSteps(introStepsData)
    setGroupedSteps(groupStepsByWeek(introStepsData))
  }, [])

  // Load reactions when family changes
  useEffect(() => {
    if (family) {
      const stored = localStorage.getItem(REACTIONS_STORAGE_KEY)
      if (stored) {
        try {
          const reactions: BabyReaction[] = JSON.parse(stored)
          const reactionMap: Record<string, BabyReaction> = {}
          reactions.forEach((r) => {
            reactionMap[`${r.intro_step_id}-${r.food_name}`] = r
          })
          setSavedReactions(reactionMap)
        } catch (e) {
          console.error('Error loading reactions:', e)
        }
      }
    }
  }, [family])

  // Create new family (localStorage only)
  const createFamily = () => {
    if (!familyName.trim()) {
      setAuthError('Por favor ingresa un nombre para tu familia')
      return
    }
    
    setAuthError('')
    
    const newFamily: Family = {
      id: generateId(),
      code: generateFamilyCode(),
      name: familyName,
      baby_name: babyName || undefined,
      created_at: new Date().toISOString(),
    }
    
    setFamily(newFamily)
    localStorage.setItem(FAMILY_STORAGE_KEY, JSON.stringify(newFamily))
  }

  // Join existing family (creates local copy with same code)
  const joinFamily = () => {
    if (!joinCode.trim()) {
      setAuthError('Por favor ingresa el código de tu familia')
      return
    }
    
    setAuthError('')
    
    // Check if we have this family code stored locally
    const stored = localStorage.getItem(FAMILY_STORAGE_KEY)
    if (stored) {
      const existingFamily: Family = JSON.parse(stored)
      if (existingFamily.code.toUpperCase() === joinCode.toUpperCase()) {
        setFamily(existingFamily)
        return
      }
    }
    
    // If not found locally, create a new family with the provided code
    // This allows using the same code across devices
    const newFamily: Family = {
      id: generateId(),
      code: joinCode.toUpperCase(),
      name: 'Familia',
      baby_name: undefined,
      created_at: new Date().toISOString(),
    }
    
    setFamily(newFamily)
    localStorage.setItem(FAMILY_STORAGE_KEY, JSON.stringify(newFamily))
  }

  // Logout
  const logout = () => {
    setFamily(null)
    setSavedReactions({})
    localStorage.removeItem(FAMILY_STORAGE_KEY)
  }

  // Copy family code
  const copyCode = () => {
    if (family?.code) {
      navigator.clipboard.writeText(family.code)
    }
  }

  // Save reaction (localStorage only)
  const saveReaction = (stepId: string, foodName: string) => {
    if (!selectedReaction || !family) return
    
    const reaction: BabyReaction = {
      id: generateId(),
      family_id: family.id,
      intro_step_id: stepId,
      food_name: foodName,
      reaction: selectedReaction,
      notes: reactionNotes || undefined,
      include_in_diet: selectedReaction !== 'allergic' && selectedReaction !== 'disliked',
      reaction_date: new Date().toISOString(),
    }
    
    // Save to localStorage
    const stored = localStorage.getItem(REACTIONS_STORAGE_KEY)
    let reactions: BabyReaction[] = stored ? JSON.parse(stored) : []
    reactions = reactions.filter(r => !(r.intro_step_id === stepId && r.food_name === foodName))
    reactions.push(reaction)
    localStorage.setItem(REACTIONS_STORAGE_KEY, JSON.stringify(reactions))
    
    // Update state
    setSavedReactions(prev => ({
      ...prev,
      [`${stepId}-${foodName}`]: reaction
    }))
    
    setShowReactionForm(false)
    setSelectedReaction(null)
    setReactionNotes('')
  }

  // Toggle include in diet
  const toggleIncludeInDiet = (reaction: BabyReaction) => {
    const updatedReaction = { ...reaction, include_in_diet: !reaction.include_in_diet }
    
    // Update localStorage
    const stored = localStorage.getItem(REACTIONS_STORAGE_KEY)
    if (stored) {
      let reactions: BabyReaction[] = JSON.parse(stored)
      reactions = reactions.map(r => r.id === reaction.id ? updatedReaction : r)
      localStorage.setItem(REACTIONS_STORAGE_KEY, JSON.stringify(reactions))
    }
    
    // Update state
    setSavedReactions(prev => ({
      ...prev,
      [`${reaction.intro_step_id}-${reaction.food_name}`]: updatedReaction
    }))
  }

  // Parse JSON
  const parseJson = (str?: string | null): string[] => {
    if (!str) return []
    try { return JSON.parse(str) } 
    catch { return [str] }
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

  // Get recipes for food
  const getRecipesForFood = (food: string) => {
    const foods = food.split('+').map(f => f.trim())
    const recipes: Array<{name: string, ingredients: string[], instructions: string[]}> = []
    
    for (const f of foods) {
      if (predefinedRecipes[f]) {
        recipes.push(...predefinedRecipes[f])
      }
    }
    
    return recipes.slice(0, 2)
  }

  // Calculations
  const totalDays = introSteps.length
  const progressPercentage = totalDays > 0 ? (currentDay / totalDays) * 100 : 0
  const currentStep = groupedSteps[selectedWeek]?.find(s => s.dayNumber === (currentDay % 7 || 7)) || groupedSteps[selectedWeek]?.[0]
  const availableWeeks = Object.keys(groupedSteps).map(Number).sort((a, b) => a - b)
  const getCurrentReaction = (step: IntroStep): BabyReaction | null => 
    step.specificFood ? savedReactions[`${step.id}-${step.specificFood}`] || null : null
  
  // Shopping list calculation
  const shoppingPeriod = getShoppingPeriod(currentDay)
  const shoppingList = calculateShoppingList(currentDay, 15, introSteps)
  const totalItems = shoppingList.length
  const checkedCount = shoppingList.filter(item => checkedItems.has(item.name)).length

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
            <CardDescription>Guía de alimentación complementaria</CardDescription>
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
                  <Label htmlFor="babyName">Nombre del bebé (opcional)</Label>
                  <Input
                    id="babyName"
                    placeholder="Ej: Sofía"
                    value={babyName}
                    onChange={(e) => setBabyName(e.target.value)}
                    className="mt-1"
                  />
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
                    Ingresa el código para continuar en este dispositivo
                  </p>
                </div>
                <Button onClick={joinFamily} className="w-full bg-orange-500 hover:bg-orange-600">
                  <Key className="w-4 h-4 mr-2" />
                  Continuar
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
                <p className="text-xs text-gray-500">{family.name}</p>
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
              
              {/* Age Selector */}
              <Select value={selectedAge} onValueChange={setSelectedAge}>
                <SelectTrigger className="w-32 bg-white border-orange-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {ageStages.map(stage => (
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
              { id: 'intro', label: 'Guía Día a Día', icon: Calendar },
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
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Guía de Introducción Gradual</h2>
                <p className="text-gray-500">Basada en recomendaciones de la OMS - Un alimento nuevo cada 3-4 días</p>
              </div>

              {/* Share Code Banner */}
              <Card className="border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Share2 className="w-5 h-5 text-green-600" />
                      <div>
                        <p className="font-medium text-green-800">Tu código de familia: <strong className="font-mono">{family.code}</strong></p>
                        <p className="text-sm text-green-600">Guárdalo para acceder desde otro dispositivo</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" onClick={copyCode}>
                      <Copy className="w-4 h-4 mr-1" /> Copiar
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Key Principle Banner */}
              <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-full">
                      <AlertTriangle className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-orange-800">Principio Fundamental</p>
                      <p className="text-sm text-orange-700">
                        Introduce <strong>UN SOLO alimento nuevo cada 3-4 días</strong> para detectar posibles alergias.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Progress Overview */}
              <Card className="border-orange-100 bg-gradient-to-r from-orange-50 to-green-50">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-700">Tu Progreso</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Día {currentDay} de {totalDays}</span>
                      <span className="text-sm font-medium text-orange-600">{Math.round(progressPercentage)}% completado</span>
                    </div>
                    <Progress value={progressPercentage} className="h-3" />
                  </div>
                </CardContent>
              </Card>

              {/* Week Selector */}
              <div className="flex gap-2 overflow-x-auto pb-2">
                {availableWeeks.map(week => (
                  <Button
                    key={week}
                    variant={selectedWeek === week ? 'default' : 'outline'}
                    className={selectedWeek === week ? 'bg-orange-500 hover:bg-orange-600' : ''}
                    onClick={() => { setSelectedWeek(week); setCurrentDay(1); }}
                  >
                    Semana {week}
                  </Button>
                ))}
              </div>

              {/* Current Day Card */}
              {currentStep && (
                <Card className="border-green-200 bg-white shadow-lg">
                  <CardHeader className="bg-gradient-to-r from-green-100 to-orange-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <Badge variant="secondary" className="mb-2">Día {currentStep.dayNumber} - Semana {currentStep.weekNumber}</Badge>
                        <CardTitle className="text-xl text-green-700">{currentStep.title}</CardTitle>
                      </div>
                      {currentStep.specificFood && (
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Alimento del día:</p>
                          <Badge className="bg-orange-500 text-white text-base px-3 py-1">{currentStep.specificFood}</Badge>
                        </div>
                      )}
                    </div>
                    <CardDescription className="text-base mt-2">{currentStep.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    {/* Portion and Frequency */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentStep.portionSize && (
                        <div className="p-3 bg-orange-50 rounded-lg">
                          <div className="flex items-center gap-2 text-orange-700 mb-1">
                            <Utensils className="w-4 h-4" />
                            <span className="font-medium">Porción</span>
                          </div>
                          <p className="text-sm text-gray-600">{currentStep.portionSize}</p>
                        </div>
                      )}
                      {currentStep.frequency && (
                        <div className="p-3 bg-blue-50 rounded-lg">
                          <div className="flex items-center gap-2 text-blue-700 mb-1">
                            <Clock className="w-4 h-4" />
                            <span className="font-medium">Frecuencia</span>
                          </div>
                          <p className="text-sm text-gray-600">{currentStep.frequency}</p>
                        </div>
                      )}
                    </div>

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

                    {/* Reaction Section */}
                    {currentStep.specificFood && (
                      <div className="border-t pt-4 mt-4">
                        <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-purple-500" />
                          ¿Cómo reaccionó el bebé?
                        </h4>
                        
                        {getCurrentReaction(currentStep) ? (
                          <div className={`p-4 rounded-lg ${reactionOptions.find(r => r.value === getCurrentReaction(currentStep)?.reaction)?.bg || 'bg-gray-50'}`}>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                {(() => {
                                  const reaction = reactionOptions.find(r => r.value === getCurrentReaction(currentStep)?.reaction)
                                  if (!reaction) return null
                                  const Icon = reaction.icon
                                  return (
                                    <>
                                      <Icon className={`w-5 h-5 ${reaction.color}`} />
                                      <span className={`font-medium ${reaction.color}`}>{reaction.label}</span>
                                    </>
                                  )
                                })()}
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant={getCurrentReaction(currentStep)?.include_in_diet ? 'default' : 'destructive'} className="text-xs">
                                  {getCurrentReaction(currentStep)?.include_in_diet ? 'En dieta' : 'Fuera de dieta'}
                                </Badge>
                                <Button size="sm" variant="outline" onClick={() => toggleIncludeInDiet(getCurrentReaction(currentStep)!)}>
                                  Cambiar
                                </Button>
                              </div>
                            </div>
                            {getCurrentReaction(currentStep)?.notes && (
                              <p className="text-sm text-gray-600 mt-2 italic">"{getCurrentReaction(currentStep)?.notes}"</p>
                            )}
                          </div>
                        ) : (
                          <>
                            {!showReactionForm ? (
                              <Button variant="outline" onClick={() => setShowReactionForm(true)} className="w-full">
                                <Heart className="w-4 h-4 mr-2" /> Registrar reacción
                              </Button>
                            ) : (
                              <div className="p-4 bg-purple-50 rounded-lg space-y-4">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                  {reactionOptions.map(option => {
                                    const Icon = option.icon
                                    return (
                                      <Button
                                        key={option.value}
                                        variant={selectedReaction === option.value ? 'default' : 'outline'}
                                        className={`flex flex-col items-center gap-1 h-auto py-3 ${selectedReaction === option.value ? 'bg-purple-500 hover:bg-purple-600' : ''}`}
                                        onClick={() => setSelectedReaction(option.value as typeof selectedReaction)}
                                      >
                                        <Icon className={`w-5 h-5 ${selectedReaction === option.value ? 'text-white' : option.color}`} />
                                        <span className="text-xs">{option.label}</span>
                                      </Button>
                                    )
                                  })}
                                </div>
                                <div>
                                  <Label className="text-sm text-gray-600">Notas (opcional)</Label>
                                  <Textarea
                                    placeholder="Ej: Le gustó mucho, abrió la boca para más..."
                                    value={reactionNotes}
                                    onChange={(e) => setReactionNotes(e.target.value)}
                                    className="mt-1"
                                    rows={2}
                                  />
                                </div>
                                <div className="flex gap-2">
                                  <Button variant="outline" onClick={() => { setShowReactionForm(false); setSelectedReaction(null); setReactionNotes('') }} className="flex-1">
                                    Cancelar
                                  </Button>
                                  <Button onClick={() => saveReaction(currentStep.id, currentStep.specificFood!)} disabled={!selectedReaction} className="flex-1 bg-purple-500 hover:bg-purple-600">
                                    Guardar
                                  </Button>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    )}

                    {/* Day Navigation */}
                    <div className="border-t pt-4 flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentDay(Math.max(1, currentDay - 1))} disabled={currentDay === 1}>
                        ← Día anterior
                      </Button>
                      <Button variant="outline" onClick={() => setCurrentDay(Math.min(totalDays, currentDay + 1))} disabled={currentDay === totalDays}>
                        Día siguiente →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          )}

          {/* Shopping List Section */}
          {activeSection === 'shopping' && (
            <motion.div key="shopping" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Lista de Compras</h2>
                <p className="text-gray-500">Alimentos necesarios para los próximos 15 días según tu progreso</p>
              </div>

              {/* Period Info */}
              <Card className="border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ShoppingCart className="w-6 h-6 text-green-600" />
                      <div>
                        <p className="font-medium text-green-800">Período de Compra #{shoppingPeriod.period}</p>
                        <p className="text-sm text-green-600">Días {shoppingPeriod.start} - {shoppingPeriod.end} (15 días)</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-700">{checkedCount}/{totalItems}</p>
                      <p className="text-xs text-gray-500">items comprados</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Progress */}
              <Progress value={(checkedCount / totalItems) * 100} className="h-2" />

              {/* Empty state */}
              {shoppingList.length === 0 && (
                <Card className="border-orange-200 bg-orange-50">
                  <CardContent className="pt-6 pb-6 text-center">
                    <ShoppingCart className="w-12 h-12 mx-auto text-orange-400 mb-3" />
                    <p className="text-orange-700 font-medium">No hay alimentos programados para este período</p>
                    <p className="text-sm text-orange-600 mt-1">Continúa avanzando en la guía de introducción</p>
                  </CardContent>
                </Card>
              )}

              {/* Shopping List by Category */}
              {shoppingList.length > 0 && (
                <div className="space-y-6">
                  {['Verduras', 'Frutas', 'Proteínas', 'Cereales', 'Otros'].map(category => {
                    const categoryItems = shoppingList.filter(item => item.category === category)
                    if (categoryItems.length === 0) return null
                    
                    return (
                      <Card key={category} className="border-gray-200">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center gap-2">
                            <span className="text-2xl">{categoryItems[0].icon}</span>
                            {category}
                            <Badge variant="secondary" className="ml-auto">{categoryItems.length}</Badge>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          {categoryItems.map((item) => (
                            <div
                              key={item.name}
                              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                                checkedItems.has(item.name) 
                                  ? 'bg-green-50 border border-green-200' 
                                  : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                              }`}
                              onClick={() => toggleItem(item.name)}
                            >
                              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                checkedItems.has(item.name) 
                                  ? 'bg-green-500 border-green-500' 
                                  : 'border-gray-300'
                              }`}>
                                {checkedItems.has(item.name) && <Check className="w-4 h-4 text-white" />}
                              </div>
                              <div className="flex-1">
                                <p className={`font-medium ${checkedItems.has(item.name) ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                                  {item.name}
                                </p>
                                <p className={`text-sm ${checkedItems.has(item.name) ? 'text-gray-400' : 'text-gray-600'}`}>
                                  {item.quantity}
                                </p>
                              </div>
                              {item.notes && (
                                <Badge variant="outline" className="text-xs">
                                  {item.notes}
                                </Badge>
                              )}
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setCheckedItems(new Set())}
                >
                  Limpiar selección
                </Button>
                <Button 
                  className="flex-1 bg-green-500 hover:bg-green-600"
                  onClick={() => {
                    const allItems = new Set(shoppingList.map(item => item.name))
                    setCheckedItems(allItems)
                  }}
                >
                  Marcar todo
                </Button>
              </div>

              {/* Tips Card */}
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-blue-800">Consejos de Compra</p>
                      <ul className="text-sm text-blue-700 mt-2 space-y-1">
                        <li>• Compra frutas y verduras frescas en pequeñas cantidades</li>
                        <li>• Las proteínas puedes congelarlas en porciones</li>
                        <li>• Los cereales tienen larga duración</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Medical Info Section */}
          {activeSection === 'guide' && (
            <motion.div key="guide" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Información Médica</h2>
                <p className="text-gray-500">Basada en recomendaciones de la OMS, UNICEF y AEPAP</p>
              </div>

              <Tabs defaultValue="recommendations">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="recommendations">Recomendaciones</TabsTrigger>
                  <TabsTrigger value="allergens">Alérgenos</TabsTrigger>
                  <TabsTrigger value="prohibited">Prohibidos</TabsTrigger>
                </TabsList>

                <TabsContent value="recommendations" className="space-y-4 mt-4">
                  <Card className="border-green-100">
                    <CardHeader><CardTitle className="text-green-700">Recomendaciones Generales</CardTitle></CardHeader>
                    <CardContent className="space-y-3">
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-medium text-green-800 mb-2">Edad de inicio</h4>
                        <p className="text-sm text-green-600">La OMS recomienda iniciar la alimentación complementaria a los 6 meses, manteniendo la lactancia materna hasta al menos los 2 años.</p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-800 mb-2">Introducción gradual</h4>
                        <p className="text-sm text-blue-600">Introduce un solo alimento nuevo cada 3-4 días para identificar posibles reacciones alérgicas.</p>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg">
                        <h4 className="font-medium text-orange-800 mb-2">Texturas</h4>
                        <p className="text-sm text-orange-600">Comienza con purés muy líquidos y ve aumentando la consistencia gradualmente.</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="allergens" className="space-y-4 mt-4">
                  <Card className="border-orange-100">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-orange-600">
                        <AlertTriangle className="w-5 h-5" /> Introducción de Alérgenos
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                        <p className="font-medium text-yellow-800">Importante</p>
                        <p className="text-sm text-yellow-700 mt-1">Introduce alérgenos comunes (huevo, pescado, frutos secos) a partir de los 6 meses, sin retrasar su introducción.</p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-2">Alérgenos comunes:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>🥚 Huevo (yema desde los 6-7 meses, clara desde los 12 meses)</li>
                          <li>🐟 Pescado (desde los 9-10 meses)</li>
                          <li>🥜 Frutos secos (en forma de crema, desde los 12 meses)</li>
                          <li>🥛 Lácteos (yogur y queso desde los 9-12 meses)</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="prohibited" className="space-y-4 mt-4">
                  <Card className="border-red-100">
                    <CardHeader>
                      <CardTitle className="text-red-600">Alimentos Prohibidos antes de los 12 meses</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="p-4 bg-red-50 rounded-lg">
                        <ul className="text-sm text-red-700 space-y-2">
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span><strong>Miel:</strong> Riesgo de botulismo infantil</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span><strong>Sal:</strong> Los riñones del bebé no están preparados</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span><strong>Azúcar:</strong> No aporta nutrientes, crea malos hábitos</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span><strong>Leche de vaca:</strong> Como bebida principal (puede usarse en preparaciones)</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm border-t border-gray-100 mt-8">
        <p className="flex items-center justify-center gap-2">
          <Heart className="w-4 h-4 text-pink-500" />
          Diseñada por <strong className="text-orange-600">Javi Design</strong>
        </p>
      </footer>
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Baby, Utensils, ChefHat, BookOpen, Sparkles, 
  Clock, Users, AlertTriangle, CheckCircle, ChevronRight,
  Calendar, Milk, Heart, ThumbsUp, ThumbsDown, AlertCircle,
  MinusCircle, MessageSquare, LogOut, Copy, Share2, User,
  Key, Plus, ArrowRight, ShoppingCart, Check
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
interface SuggestedRecipe {
  name: string
  description?: string
  minAgeMonths: number
  prepTime: number
  cookTime: number
  servings: number
  ingredients: Array<{ name: string; quantity: string; notes?: string }>
  instructions: string[]
  tips?: string[]
}

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
  baby_birth_date?: string
  created_at: string
}

// Storage keys
const FAMILY_STORAGE_KEY = 'nutribebe_family'
const REACTIONS_STORAGE_KEY = 'nutribebe_reactions'

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
  const [loading, setLoading] = useState({ suggest: false, dayRecipe: false })
  const [ingredientInput, setIngredientInput] = useState('')
  const [suggestedRecipes, setSuggestedRecipes] = useState<SuggestedRecipe[]>([])
  const [dayRecipes, setDayRecipes] = useState<SuggestedRecipe[]>([])
  const [selectedRecipeIndex, setSelectedRecipeIndex] = useState(0)
  const [selectedDayRecipeIndex, setSelectedDayRecipeIndex] = useState(0)
  
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
      loadReactions()
    }
  }, [family])

  // Load reactions from API or localStorage
  const loadReactions = async () => {
    if (!family) return
    
    try {
      // Try API first
      const response = await fetch(`/api/reactions?familyId=${family.id}`)
      const data = await response.json()
      
      if (data.reactions && data.reactions.length > 0) {
        const reactionMap: Record<string, BabyReaction> = {}
        data.reactions.forEach((r: BabyReaction) => {
          reactionMap[`${r.intro_step_id}-${r.food_name}`] = r
        })
        setSavedReactions(reactionMap)
      } else {
        // Fallback to localStorage
        const stored = localStorage.getItem(REACTIONS_STORAGE_KEY)
        if (stored) {
          const reactions: BabyReaction[] = JSON.parse(stored)
          const reactionMap: Record<string, BabyReaction> = {}
          reactions.forEach((r) => {
            reactionMap[`${r.intro_step_id}-${r.food_name}`] = r
          })
          setSavedReactions(reactionMap)
        }
      }
    } catch (error) {
      // Fallback to localStorage on error
      const stored = localStorage.getItem(REACTIONS_STORAGE_KEY)
      if (stored) {
        const reactions: BabyReaction[] = JSON.parse(stored)
        const reactionMap: Record<string, BabyReaction> = {}
        reactions.forEach((r) => {
          reactionMap[`${r.intro_step_id}-${r.food_name}`] = r
        })
        setSavedReactions(reactionMap)
      }
    }
  }

  // Create new family
  const createFamily = async () => {
    if (!familyName.trim()) {
      setAuthError('Por favor ingresa un nombre para tu familia')
      return
    }
    
    setAuthError('')
    
    try {
      const response = await fetch('/api/family', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: familyName,
          babyName: babyName || undefined,
        }),
      })
      
      const data = await response.json()
      
      if (data.success && data.family) {
        setFamily(data.family)
        localStorage.setItem(FAMILY_STORAGE_KEY, JSON.stringify(data.family))
      } else {
        setAuthError(data.error || 'Error al crear la familia')
      }
    } catch (error) {
      setAuthError('Error de conexión')
    }
  }

  // Join existing family
  const joinFamily = async () => {
    if (!joinCode.trim()) {
      setAuthError('Por favor ingresa el código de tu familia')
      return
    }
    
    setAuthError('')
    
    try {
      const response = await fetch(`/api/family?code=${joinCode.toUpperCase()}`)
      const data = await response.json()
      
      if (data.success && data.family) {
        setFamily(data.family)
        localStorage.setItem(FAMILY_STORAGE_KEY, JSON.stringify(data.family))
      } else {
        setAuthError(data.error || 'Código no encontrado')
      }
    } catch (error) {
      setAuthError('Error de conexión')
    }
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

  // Save reaction
  const saveReaction = async (stepId: string, foodName: string) => {
    if (!selectedReaction || !family) return
    
    const reaction: BabyReaction = {
      id: `local-${Date.now()}`,
      family_id: family.id,
      intro_step_id: stepId,
      food_name: foodName,
      reaction: selectedReaction,
      notes: reactionNotes || undefined,
      include_in_diet: selectedReaction !== 'allergic' && selectedReaction !== 'disliked',
      reaction_date: new Date().toISOString(),
    }
    
    // Save to localStorage first (always works)
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
    
    // Try to save to API
    try {
      await fetch('/api/reactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          familyId: family.id,
          introStepId: stepId,
          foodName,
          reaction: selectedReaction,
          notes: reactionNotes,
          includeInDiet: reaction.include_in_diet,
        }),
      })
    } catch (error) {
      // API failed, but localStorage already saved
    }
    
    setShowReactionForm(false)
    setSelectedReaction(null)
    setReactionNotes('')
  }

  // Toggle include in diet
  const toggleIncludeInDiet = async (reaction: BabyReaction) => {
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
    
    // Try API
    try {
      await fetch('/api/reactions', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: reaction.id, includeInDiet: updatedReaction.include_in_diet }),
      })
    } catch (error) {
      // API failed, but localStorage updated
    }
  }

  // Suggest recipes
  const suggestRecipes = async () => {
    if (!ingredientInput.trim()) return
    setLoading(prev => ({ ...prev, suggest: true }))
    setSuggestedRecipes([])
    setSelectedRecipeIndex(0)
    
    try {
      const ingredientsList = ingredientInput.split(',').map(i => i.trim()).filter(i => i.length > 0)
      const response = await fetch('/api/recipes/suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingredients: ingredientsList, ageMonths: parseInt(selectedAge) }),
      })
      const data = await response.json()
      setSuggestedRecipes(data.recipes || [])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(prev => ({ ...prev, suggest: false }))
    }
  }

  // Suggest day recipes
  const suggestDayRecipes = async (food: string) => {
    if (!food) return
    setLoading(prev => ({ ...prev, dayRecipe: true }))
    setDayRecipes([])
    setSelectedDayRecipeIndex(0)
    
    try {
      const foods = food.split('+').map(f => f.trim()).filter(f => f.length > 0)
      const response = await fetch('/api/recipes/suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingredients: foods, ageMonths: parseInt(selectedAge), strictMode: true }),
      })
      const data = await response.json()
      setDayRecipes(data.recipes || [])
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(prev => ({ ...prev, dayRecipe: false }))
    }
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
              { id: 'suggest', label: 'Sugerir Recetas', icon: Sparkles },
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
                        <p className="text-sm text-green-600">Compártelo para acceder desde otros dispositivos</p>
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
                    onClick={() => { setSelectedWeek(week); setCurrentDay(1); setDayRecipes([]); }}
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

                    {/* Generate Recipe Button */}
                    {currentStep.specificFood && (
                      <div className="border-t pt-4">
                        <Button onClick={() => suggestDayRecipes(currentStep.specificFood!)} disabled={loading.dayRecipe} className="w-full bg-green-500 hover:bg-green-600">
                          {loading.dayRecipe ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin mr-2" /> Generando recetas...
                            </>
                          ) : (
                            <>
                              <ChefHat className="w-4 h-4 mr-2" /> Generar recetas con {currentStep.specificFood}
                            </>
                          )}
                        </Button>
                        
                        <AnimatePresence>
                          {dayRecipes.length > 0 && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-4 space-y-4">
                              <div className="flex gap-2">
                                {dayRecipes.map((_, index) => (
                                  <Button
                                    key={index}
                                    variant={selectedDayRecipeIndex === index ? 'default' : 'outline'}
                                    size="sm"
                                    className={selectedDayRecipeIndex === index ? 'bg-orange-500 hover:bg-orange-600' : ''}
                                    onClick={() => setSelectedDayRecipeIndex(index)}
                                  >
                                    Opción {index + 1}
                                  </Button>
                                ))}
                              </div>
                              
                              {dayRecipes[selectedDayRecipeIndex] && (
                                <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
                                  <CardHeader className="bg-gradient-to-r from-green-100 to-orange-50 rounded-t-lg pb-3">
                                    <CardTitle className="text-lg text-green-700">{dayRecipes[selectedDayRecipeIndex].name}</CardTitle>
                                    <CardDescription>{dayRecipes[selectedDayRecipeIndex].description}</CardDescription>
                                  </CardHeader>
                                  <CardContent className="pt-4 space-y-4">
                                    <div className="flex flex-wrap items-center gap-4 text-sm">
                                      <div className="flex items-center gap-2 text-gray-600">
                                        <Clock className="w-4 h-4 text-green-500" />
                                        <span>Prep: {dayRecipes[selectedDayRecipeIndex].prepTime} min</span>
                                      </div>
                                      <div className="flex items-center gap-2 text-gray-600">
                                        <ChefHat className="w-4 h-4 text-orange-500" />
                                        <span>Cocción: {dayRecipes[selectedDayRecipeIndex].cookTime} min</span>
                                      </div>
                                    </div>
                                    <Separator />
                                    <div>
                                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                        <Utensils className="w-4 h-4 text-orange-500" /> Ingredientes
                                      </h4>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {dayRecipes[selectedDayRecipeIndex].ingredients.map((ing, i) => (
                                          <div key={i} className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
                                            <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                                            <div className="text-sm">
                                              <span className="font-medium">{ing.name}</span>
                                              <span className="text-gray-500 ml-1">- {ing.quantity}</span>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                        <ChefHat className="w-4 h-4 text-green-500" /> Preparación
                                      </h4>
                                      <ol className="space-y-2">
                                        {dayRecipes[selectedDayRecipeIndex].instructions.map((step, i) => (
                                          <li key={i} className="flex gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-medium">{i + 1}</span>
                                            <span className="text-gray-600 text-sm">{step}</span>
                                          </li>
                                        ))}
                                      </ol>
                                    </div>
                                  </CardContent>
                                </Card>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    {/* Navigation */}
                    <div className="flex justify-between pt-4 border-t">
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
                  {/* Group by category */}
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
                  Marcar todo como comprado
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
                        <li>• Las proteínas (pollo, ternera) puedes congelarlas en porciones</li>
                        <li>• Los cereales tienen larga duración, compra para todo el mes</li>
                        <li>• Prefiere productos orgánicos cuando sea posible</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Suggest Recipes Section */}
          {activeSection === 'suggest' && (
            <motion.div key="suggest" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Sugerir Recetas con IA</h2>
                <p className="text-gray-500">Introduce los ingredientes y la IA sugerirá 2 recetas</p>
              </div>

              <Card className="border-orange-100">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-orange-500" /> Introduce los ingredientes
                  </CardTitle>
                  <CardDescription>Separados por comas (ej: calabacín, zanahoria, pollo)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea placeholder="calabacín, zanahoria, patata..." value={ingredientInput} onChange={(e) => setIngredientInput(e.target.value)} rows={3} />
                  <Button onClick={suggestRecipes} disabled={loading.suggest || !ingredientInput.trim()} className="w-full bg-orange-500 hover:bg-orange-600">
                    {loading.suggest ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin mr-2" /> Generando recetas...
                      </>
                    ) : (
                      <>
                        <ChefHat className="w-4 h-4 mr-2" /> Sugerir recetas
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {suggestedRecipes.length > 0 && (
                <div className="space-y-4">
                  <div className="flex gap-2">
                    {suggestedRecipes.map((_, index) => (
                      <Button
                        key={index}
                        variant={selectedRecipeIndex === index ? 'default' : 'outline'}
                        size="sm"
                        className={selectedRecipeIndex === index ? 'bg-orange-500 hover:bg-orange-600' : ''}
                        onClick={() => setSelectedRecipeIndex(index)}
                      >
                        Opción {index + 1}
                      </Button>
                    ))}
                  </div>
                  
                  {suggestedRecipes[selectedRecipeIndex] && (
                    <Card className="border-green-200 bg-gradient-to-br from-green-50 to-white">
                      <CardHeader className="bg-gradient-to-r from-green-100 to-orange-50 rounded-t-lg pb-3">
                        <CardTitle className="text-xl text-green-700">{suggestedRecipes[selectedRecipeIndex].name}</CardTitle>
                        <CardDescription className="text-base">{suggestedRecipes[selectedRecipeIndex].description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4 space-y-4">
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4 text-green-500" />
                            <span>Preparación: {suggestedRecipes[selectedRecipeIndex].prepTime} min</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <ChefHat className="w-4 h-4 text-orange-500" />
                            <span>Cocción: {suggestedRecipes[selectedRecipeIndex].cookTime} min</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Users className="w-4 h-4 text-blue-500" />
                            <span>{suggestedRecipes[selectedRecipeIndex].servings} porciones</span>
                          </div>
                        </div>
                        <Separator />
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <Utensils className="w-4 h-4 text-orange-500" /> Ingredientes
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {suggestedRecipes[selectedRecipeIndex].ingredients.map((ing, i) => (
                              <div key={i} className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <div>
                                  <span className="font-medium">{ing.name}</span>
                                  <span className="text-gray-500 ml-1">- {ing.quantity}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <ChefHat className="w-4 h-4 text-green-500" /> Preparación
                          </h4>
                          <ol className="space-y-3">
                            {suggestedRecipes[selectedRecipeIndex].instructions.map((step, i) => (
                              <li key={i} className="flex gap-3">
                                <span className="flex-shrink-0 w-7 h-7 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-medium">{i + 1}</span>
                                <span className="text-gray-600 pt-0.5">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
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
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="recommendations">Recomendaciones</TabsTrigger>
                  <TabsTrigger value="allergens">Alérgenos</TabsTrigger>
                  <TabsTrigger value="prohibited">Prohibidos</TabsTrigger>
                  <TabsTrigger value="quantities">Cantidades</TabsTrigger>
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
                        <p className="text-sm text-yellow-700 mt-1">Los alérgenos deben introducirse uno a uno. Consulta con el pediatra si hay antecedentes familiares de alergias.</p>
                      </div>
                      <div className="p-3 border rounded-lg"><p className="font-medium text-gray-800">🥛 Lácteos</p><p className="text-xs text-gray-600 mt-1">Yogur natural y queso fresco a partir de los 8 meses. Leche de vaca como bebida después de los 12 meses.</p></div>
                      <div className="p-3 border rounded-lg"><p className="font-medium text-gray-800">🥚 Huevo</p><p className="text-xs text-gray-600 mt-1">Primero la yema cocida (8 meses), luego la clara (9-10 meses).</p></div>
                      <div className="p-3 border rounded-lg"><p className="font-medium text-gray-800">🐟 Pescado</p><p className="text-xs text-gray-600 mt-1">Pescado blanco a partir de los 8-9 meses.</p></div>
                      <div className="p-3 border rounded-lg"><p className="font-medium text-gray-800">🌾 Gluten</p><p className="text-xs text-gray-600 mt-1">Introducir entre los 6-9 meses de forma gradual.</p></div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="prohibited" className="space-y-4 mt-4">
                  <Card className="border-red-100">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-red-600">
                        <AlertTriangle className="w-5 h-5" /> Alimentos Prohibidos o Restringidos
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <p className="font-bold text-red-700">🍯 Miel - PROHIBIDA hasta los 12 meses</p>
                        <p className="text-sm text-red-600 mt-1">Riesgo de botulismo infantil.</p>
                      </div>
                      <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                        <p className="font-bold text-red-700">🧂 Sal - NO añadir</p>
                        <p className="text-sm text-red-600 mt-1">Los riñones del bebé no están preparados para procesar el sodio.</p>
                      </div>
                      <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                        <p className="font-bold text-red-700">🍬 Azúcar - EVITAR</p>
                        <p className="text-sm text-red-600 mt-1">Las frutas aportan dulzor natural.</p>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                        <p className="font-bold text-orange-700">🥛 Leche de vaca - Como bebida, hasta los 12 meses</p>
                        <p className="text-sm text-orange-600 mt-1">No dar como bebida principal hasta el año.</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="quantities" className="space-y-4 mt-4">
                  <Card className="border-green-100">
                    <CardHeader><CardTitle className="text-green-700">Cantidades por Edad</CardTitle></CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800">6-7 meses</h4>
                          <ul className="text-sm text-green-600 mt-2 space-y-1">
                            <li>• Almuerzo: 2-4 cucharadas (20-40g)</li>
                            <li>• Merienda: 2-3 cucharadas de fruta</li>
                            <li>• Lactancia: 4-6 tomas al día</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800">8-9 meses</h4>
                          <ul className="text-sm text-green-600 mt-2 space-y-1">
                            <li>• Almuerzo: 4-6 cucharadas (50-80g)</li>
                            <li>• Merienda: 3-4 cucharadas de fruta</li>
                            <li>• Lactancia: 3-4 tomas al día</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800">10-12 meses</h4>
                          <ul className="text-sm text-green-600 mt-2 space-y-1">
                            <li>• Tres comidas al día + 1-2 snacks</li>
                            <li>• Porciones de 100-150g por comida</li>
                            <li>• Lactancia: 2-3 tomas al día</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              <Card className="border-blue-100 bg-blue-50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-blue-700 font-medium">Fuentes consultadas</p>
                      <ul className="text-xs text-blue-600 mt-1 space-y-1">
                        <li>• OMS - Organización Mundial de la Salud</li>
                        <li>• UNICEF</li>
                        <li>• AEPAP - Asociación Española de Pediatría de Atención Primaria</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-orange-100 bg-white/60 backdrop-blur-sm py-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500">
            ✨ Diseñada por <span className="font-semibold text-orange-600">Javi Design</span> ✨
          </p>
        </div>
      </footer>
    </div>
  )
}

import { createClient } from '@supabase/supabase-js'

// Configuración de Supabase
// Estas variables se configuran en Netlify como environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Tipos
export interface Family {
  id: string
  code: string
  name: string
  baby_name?: string
  baby_birth_date?: string
  created_at: string
}

export interface FamilyReaction {
  id: string
  family_id: string
  intro_step_id: string
  food_name: string
  reaction: 'liked' | 'neutral' | 'disliked' | 'allergic'
  notes?: string
  include_in_diet: boolean
  reaction_date: string
  created_at: string
}

// Funciones de utilidad
export function generateFamilyCode(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

// Verificar si Supabase está configurado
export function isSupabaseConfigured(): boolean {
  return supabaseUrl !== '' && supabaseAnonKey !== ''
}

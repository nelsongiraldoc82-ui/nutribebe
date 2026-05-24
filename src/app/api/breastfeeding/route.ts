import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const ageMonths = searchParams.get('ageMonths') ? parseInt(searchParams.get('ageMonths')!) : null

    const guides = await db.breastfeedingGuide.findMany({
      where: ageMonths ? { ageMonths } : {},
      orderBy: { ageMonths: 'asc' }
    })

    return NextResponse.json(guides)
  } catch (error) {
    console.error('Error fetching breastfeeding guides:', error)
    return NextResponse.json(
      { error: 'Error al obtener las guías de lactancia' },
      { status: 500 }
    )
  }
}

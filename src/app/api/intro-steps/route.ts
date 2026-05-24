import { NextRequest, NextResponse } from 'next/server'
import { introStepsData, groupStepsByWeek } from '@/lib/intro-steps-data'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const weekNumber = searchParams.get('week')

    let steps = introStepsData

    if (weekNumber) {
      steps = steps.filter(step => step.weekNumber === parseInt(weekNumber))
    }

    // Group by week for easier frontend consumption
    const groupedByWeek = groupStepsByWeek(steps)

    return NextResponse.json({
      steps,
      groupedByWeek,
      totalSteps: steps.length,
      totalWeeks: Object.keys(groupedByWeek).length
    })
  } catch (error) {
    console.error('Error fetching intro steps:', error)
    return NextResponse.json(
      { error: 'Error al obtener la guía de introducción' },
      { status: 500 }
    )
  }
}

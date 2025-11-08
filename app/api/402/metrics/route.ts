import { NextRequest, NextResponse } from 'next/server'

interface MetricsResponse {
  tx_per_min: number
  volume_24h: number
  unique_posters_24h: number
  ctr_social: number
  conv_whitelist: number
  token_price: number
  velocity_402: number
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const scope = searchParams.get('scope') || 'global'

  // Mock data - в продакшене здесь будет реальный запрос к API 402
  const baseMetrics: MetricsResponse = {
    tx_per_min: 37 + Math.floor(Math.random() * 5),
    volume_24h: 2300000 + Math.floor(Math.random() * 100000),
    unique_posters_24h: 1200 + Math.floor(Math.random() * 50),
    ctr_social: 12.4 + Math.random() * 0.5,
    conv_whitelist: 7.8 + Math.random() * 0.3,
    token_price: 0.0041 + Math.random() * 0.0001,
    velocity_402: 82 + Math.floor(Math.random() * 5),
  }

  // Если scope - проект, можно вернуть специфичные метрики
  if (scope.startsWith('project:')) {
    const projectId = scope.split(':')[1]
    // Здесь можно добавить логику для получения метрик конкретного проекта
    return NextResponse.json({
      ...baseMetrics,
      // Проект-специфичные метрики могут отличаться
      velocity_402: 75 + Math.floor(Math.random() * 15),
    })
  }

  return NextResponse.json(baseMetrics)
}


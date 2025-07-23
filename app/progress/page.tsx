interface StudyMetrics {
  surveyResponses: number
  interviewsCompleted: number
  demographicDiversity: number
  targetSurvey: number
  targetInterviews: number
  startDate: string
  estimatedCompletion: string
}

function MetricCard({ 
  title, 
  current, 
  target, 
  icon, 
  unit = "",
  description 
}: {
  title: string
  current: number
  target: number
  icon: string
  unit?: string
  description: string
}) {
  const progress = Math.round((current / target) * 100)
  
  return (
    <div className="bg-background border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        <span className="text-sm text-muted-foreground">
          {current}/{target}{unit}
        </span>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      
      <div className="w-full bg-muted rounded-full h-3 mb-2">
        <div 
          className="bg-primary h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{progress}% complete</span>
        <span className="text-xs text-muted-foreground">
          {target - current} remaining
        </span>
      </div>
    </div>
  )
}

function TimelinePhase({ 
  title, 
  date, 
  status, 
  description 
}: {
  title: string
  date: string
  status: 'completed' | 'active' | 'upcoming'
  description: string
}) {
  const statusConfig = {
    completed: { color: 'bg-green-500', pulse: false },
    active: { color: 'bg-primary', pulse: true },
    upcoming: { color: 'bg-muted', pulse: false }
  }
  
  const config = statusConfig[status]
  
  return (
    <div className="flex items-start gap-4 pb-8">
      <div className={`flex-shrink-0 w-4 h-4 rounded-full mt-2 ${config.color} ${config.pulse ? 'animate-pulse' : ''}`} />
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
          <h3 className="font-semibold">{title}</h3>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export default function Progress() {
  const metrics: StudyMetrics = {
    surveyResponses: 19,
    interviewsCompleted: 0,
    demographicDiversity: 100,
    targetSurvey: 200,
    targetInterviews: 15,
    startDate: "July 2025",
    estimatedCompletion: "September 2025"
  }
  
  const phases = [
    {
      title: 'Study Launch',
      date: 'July 2025',
      status: 'completed' as const,
      description: 'Website launch, ethics approval, and recruitment materials finalized'
    },
    {
      title: 'Active Data Collection',
      date: 'Aug-Sep 2025',
      status: 'active' as const,
      description: 'Conducting interviews and collecting survey responses from diverse participants'
    },
    {
      title: 'Data Analysis',
      date: 'Oct 2025',
      status: 'upcoming' as const,
      description: 'Analyzing interview transcripts and survey data using thematic analysis'
    },
    {
      title: 'Results & Publication',
      date: 'Nov 2025',
      status: 'upcoming' as const,
      description: 'Final report completion and sharing findings with participants and community'
    }
  ]
  
  const overallProgress = Math.round(
    ((metrics.surveyResponses / metrics.targetSurvey) * 0.6 + 
     (metrics.interviewsCompleted / metrics.targetInterviews) * 0.4) * 100
  )
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Research Progress</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Follow along as we explore the role of stillness in modern life through community voices and experiences.
        </p>
      </div>
      
      {/* Overall Progress Banner */}
      <div className="bg-primary text-primary-foreground rounded-lg p-6 mb-12 text-center">
        <h2 className="text-2xl font-bold mb-2">Overall Study Progress</h2>
        <div className="text-5xl font-bold mb-2">{overallProgress}%</div>
        <p className="opacity-90">
          Started {metrics.startDate} • Estimated completion {metrics.estimatedCompletion}
        </p>
      </div>
      
      {/* Key Metrics */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <MetricCard 
          title="Survey Responses"
          current={metrics.surveyResponses}
          target={metrics.targetSurvey}
          icon="📊"
          description="Anonymous online surveys capturing diverse perspectives on stillness"
        />
        <MetricCard 
          title="In-Depth Interviews"
          current={metrics.interviewsCompleted}
          target={metrics.targetInterviews}
          icon="🎤"
          description="One-on-one conversations exploring personal relationships with quiet"
        />
        <MetricCard 
          title="Demographic Diversity"
          current={metrics.demographicDiversity}
          target={100}
          icon="🌍"
          unit="%"
          description="Representation across age groups, backgrounds, and life experiences"
        />
      </div>
      
      {/* Participation Impact */}
      <div className="bg-muted/50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center">Your Voice Matters</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <span className="text-green-500">✓</span>
              What We&apos;re Learning
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Diverse definitions of &quot;stillness&quot; across age groups</li>
              <li>• Impact of technology on quiet moment practices</li>
              <li>• Cultural differences in approaches to silence</li>
              <li>• Barriers and facilitators to finding stillness</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <span className="text-blue-500">→</span>
              Still Needed
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• More voices from rural/urban environments</li>
              <li>• Parents and caregivers perspectives</li>
              <li>• Working professionals in high-stress roles</li>
              <li>• International and multicultural viewpoints</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Research Timeline */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-8">Research Timeline</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-border"></div>
          
          {phases.map((phase, index) => (
            <TimelinePhase key={index} {...phase} />
          ))}
        </div>
      </div>
      
      {/* Transparency Note */}
      <div className="border-l-4 border-primary pl-6 py-4 bg-primary/5 rounded-r-lg">
        <h3 className="font-semibold mb-2">Research Transparency</h3>
        <p className="text-sm text-muted-foreground">
          Progress updates are shared regularly to maintain transparency and accountability. 
          All data collection follows ethical guidelines with participant privacy as our top priority. 
          Final results will be made available to all participants and the broader community.
        </p>
      </div>
    </div>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Target, 
  Gamepad2, 
  Users, 
  Globe, 
  TrendingUp,
  DollarSign,
  Calendar,
  Zap
} from 'lucide-react';

const Opportunities = () => {
  const opportunities = [
    {
      id: 1,
      title: 'Web3 Gaming Payments',
      description: 'Become the go-to payment provider for blockchain-based games, NFTs, and metaverse platforms.',
      marketSize: '$100B by 2028',
      revenueTarget: '$20M ARR',
      timeline: '24 months',
      priority: 'High',
      icon: Gamepad2,
      features: [
        'NFT checkout with multi-chain support',
        'Play-to-earn payroll systems',
        'Cross-chain payment routing',
        'Gaming DAO treasury management'
      ],
      keyMetrics: [
        '10 Web3 gaming launch partners',
        '1000+ NFT transactions daily',
        '5 blockchain networks supported',
        '99.9% uptime for Web3 payments'
      ]
    },
    {
      id: 2,
      title: 'Creator Economy Monetization',
      description: 'Provide comprehensive payment solutions for streamers, influencers, and content creators in gaming.',
      marketSize: '$250B creator economy',
      revenueTarget: '$10M ARR',
      timeline: '18 months',
      priority: 'High',
      icon: Users,
      features: [
        'Real-time tipping systems',
        'Subscription management',
        'Merchandise sales integration',
        'Sponsorship payment automation'
      ],
      keyMetrics: [
        '50 gaming creators onboarded',
        '$100M processed for creators',
        '25% creator retention rate',
        '10+ platform integrations'
      ]
    },
    {
      id: 3,
      title: 'Geographic Expansion',
      description: 'Target emerging gaming markets in Southeast Asia and Latin America with localized solutions.',
      marketSize: '$8B SEA mobile gaming',
      revenueTarget: '$15M ARR',
      timeline: '36 months',
      priority: 'Medium',
      icon: Globe,
      features: [
        'Local payment method integration',
        'Multi-language platform support',
        'Regional compliance management',
        'Local partnership development'
      ],
      keyMetrics: [
        '10% revenue from SEA market',
        '5 countries with full compliance',
        '20+ local payment methods',
        '100+ regional gaming partners'
      ]
    },
    {
      id: 4,
      title: 'DeFi Treasury Services',
      description: 'Offer yield-generating services for gaming companies to optimize their treasury management.',
      marketSize: 'Corporate crypto treasury',
      revenueTarget: '$5M ARR',
      timeline: '24 months',
      priority: 'Medium',
      icon: TrendingUp,
      features: [
        'Automated yield farming',
        'DeFi lending protocols',
        'Risk management tools',
        'Treasury analytics dashboard'
      ],
      keyMetrics: [
        '$50M assets under management',
        '25 gaming companies using service',
        '8% average yield generated',
        '99.5% fund security rate'
      ]
    }
  ];

  const implementationPhases = [
    {
      quarter: 'Q1 2024',
      theme: 'Web3 Gaming Foundation',
      initiatives: [
        'Launch NFT checkout solution',
        'Multi-chain payment support',
        'Gaming platform integrations',
        'AI fraud detection for crypto'
      ]
    },
    {
      quarter: 'Q2 2024',
      theme: 'Creator Economy Launch',
      initiatives: [
        'Tipping and subscription tools',
        'Streaming platform integrations',
        'Creator onboarding program',
        'Merchandise payment solutions'
      ]
    },
    {
      quarter: 'Q3 2024',
      theme: 'Geographic Expansion',
      initiatives: [
        'SEA market entry strategy',
        'Local payment method integration',
        'Regional compliance setup',
        'Partnership development'
      ]
    },
    {
      quarter: 'Q4 2024',
      theme: 'DeFi & Platform Scaling',
      initiatives: [
        'DeFi treasury services launch',
        'Yield farming integration',
        'Infrastructure scaling',
        'Advanced analytics platform'
      ]
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Strategic Opportunities</h1>
        <p className="text-xl text-muted-foreground">
          Four high-impact opportunities to drive Breeze Cash's growth in the gaming payments ecosystem.
        </p>
      </div>

      {/* Opportunity Cards */}
      <div className="space-y-8">
        {opportunities.map((opportunity) => {
          const Icon = opportunity.icon;
          return (
            <Card key={opportunity.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{opportunity.title}</CardTitle>
                      <p className="text-muted-foreground mt-1">{opportunity.description}</p>
                    </div>
                  </div>
                  <Badge className={getPriorityColor(opportunity.priority)}>
                    {opportunity.priority} Priority
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-muted-foreground">Market Size</div>
                      <div className="font-semibold">{opportunity.marketSize}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="text-sm text-muted-foreground">Revenue Target</div>
                      <div className="font-semibold text-green-600">{opportunity.revenueTarget}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="text-sm text-muted-foreground">Timeline</div>
                      <div className="font-semibold">{opportunity.timeline}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-orange-600" />
                    <div>
                      <div className="text-sm text-muted-foreground">Priority</div>
                      <div className="font-semibold">{opportunity.priority}</div>
                    </div>
                  </div>
                </div>

                {/* Features and Metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {opportunity.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <Zap className="h-4 w-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Success Metrics</h4>
                    <ul className="space-y-2">
                      {opportunity.keyMetrics.map((metric, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <Target className="h-4 w-4 text-green-600" />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Implementation Timeline */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-6 w-6" />
            <span>Implementation Timeline</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {implementationPhases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Timeline connector */}
                {index < implementationPhases.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-border"></div>
                )}
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    Q{index + 1}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">{phase.quarter}</h4>
                      <Badge variant="outline">{phase.theme}</Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {phase.initiatives.map((initiative, initIndex) => (
                        <div key={initIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{initiative}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Combined Impact */}
      <Card>
        <CardHeader>
          <CardTitle>Combined Revenue Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">$50M</div>
              <div className="text-sm text-blue-600 font-medium">Total ARR Target</div>
              <div className="text-xs text-muted-foreground mt-1">Within 24 months</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">4</div>
              <div className="text-sm text-green-600 font-medium">Strategic Opportunities</div>
              <div className="text-xs text-muted-foreground mt-1">Diversified revenue streams</div>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-sm text-purple-600 font-medium">Market Segments</div>
              <div className="text-xs text-muted-foreground mt-1">Across gaming ecosystem</div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-accent rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Strategic Rationale:</strong> These opportunities leverage Breeze Cash's core strengths 
              (gaming expertise, AI fraud prevention, merchant of record model) while expanding into 
              high-growth adjacent markets. The phased approach allows for learning and iteration while 
              building a diversified revenue base that reduces dependence on any single market segment.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Opportunities;


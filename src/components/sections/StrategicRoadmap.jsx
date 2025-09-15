import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Calendar, 
  Users, 
  DollarSign, 
  Target,
  TrendingUp,
  Zap,
  Globe,
  Shield
} from 'lucide-react';

const StrategicRoadmap = () => {
  const quarterlyRoadmap = [
    {
      quarter: 'Q1 2024',
      theme: 'Web3 Gaming Foundation',
      focus: 'Build the foundation for Web3 gaming payments',
      revenue: '$2M ARR',
      keyInitiatives: [
        'Launch NFT checkout solution with multi-chain support',
        'Integrate with major NFT marketplaces and blockchain gaming platforms',
        'Onboard 10 Web3 gaming launch partners',
        'Enhance AI fraud detection for NFT and crypto transactions'
      ],
      deliverables: [
        'NFT payment gateway (Ethereum, Polygon, Solana)',
        'Gaming platform SDK and documentation',
        'AI fraud model for crypto transactions',
        'Web3 gaming partner program'
      ],
      metrics: [
        '10 Web3 gaming partners',
        '$10M transaction volume',
        '99.9% uptime',
        '<0.1% fraud rate'
      ]
    },
    {
      quarter: 'Q2 2024',
      theme: 'Creator Economy Launch',
      focus: 'Expand into the gaming creator economy',
      revenue: '$5M ARR',
      keyInitiatives: [
        'Launch tipping and subscription tools for streamers',
        'Integrate with Twitch, YouTube Gaming, and other platforms',
        'Develop merchandise sales and sponsorship payment solutions',
        'Onboard 50 gaming content creators'
      ],
      deliverables: [
        'Creator monetization dashboard',
        'Streaming platform integrations',
        'Merchandise payment gateway',
        'Creator analytics and reporting'
      ],
      metrics: [
        '50 creators onboarded',
        '$25M processed for creators',
        '5 platform integrations',
        '85% creator satisfaction'
      ]
    },
    {
      quarter: 'Q3 2024',
      theme: 'Geographic Expansion',
      focus: 'Enter Southeast Asian gaming markets',
      revenue: '$8M ARR',
      keyInitiatives: [
        'Add support for local payment methods in SEA',
        'Localize platform and documentation for key SEA languages',
        'Establish partnerships with regional gaming communities',
        'Secure regulatory approvals in target countries'
      ],
      deliverables: [
        'SEA payment method integrations',
        'Multi-language platform support',
        'Regional compliance framework',
        'Local partnership agreements'
      ],
      metrics: [
        '5 countries with compliance',
        '20+ local payment methods',
        '10% revenue from SEA',
        '100+ regional partners'
      ]
    },
    {
      quarter: 'Q4 2024',
      theme: 'DeFi & Platform Scaling',
      focus: 'Introduce DeFi services and scale platform',
      revenue: '$15M ARR',
      keyInitiatives: [
        'Launch DeFi treasury management services for gaming companies',
        'Integrate with leading DeFi protocols for yield generation',
        'Scale infrastructure to support 10x transaction volume',
        'Enhance analytics and reporting for all services'
      ],
      deliverables: [
        'DeFi treasury management platform',
        'Yield farming integration',
        'Scaled infrastructure (10x capacity)',
        'Advanced analytics dashboard'
      ],
      metrics: [
        '$50M assets under management',
        '25 companies using DeFi services',
        '8% average yield generated',
        '10x transaction capacity'
      ]
    }
  ];

  const resourceRequirements = {
    team: [
      { department: 'Engineering', current: 15, target: 35, growth: '+20' },
      { department: 'Product', current: 3, target: 8, growth: '+5' },
      { department: 'Sales & Marketing', current: 8, target: 23, growth: '+15' },
      { department: 'Compliance & Legal', current: 2, target: 7, growth: '+5' },
      { department: 'Operations', current: 5, target: 10, growth: '+5' }
    ],
    investment: [
      { category: 'Technology Development', amount: '$8M', description: 'Web3 integration, AI development, infrastructure' },
      { category: 'Marketing & Sales', amount: '$10M', description: 'Creator partnerships, global expansion, demand generation' },
      { category: 'Compliance & Legal', amount: '$3M', description: 'International licensing, regulatory compliance' },
      { category: 'Operations', amount: '$2M', description: 'Team scaling, office expansion, systems' }
    ]
  };

  const successMetrics = [
    {
      category: 'Business Metrics',
      icon: DollarSign,
      metrics: [
        { name: 'Annual Recurring Revenue', target: '$15M', timeframe: 'End of Year 1' },
        { name: 'Transaction Volume', target: '$5B', timeframe: 'Annually' },
        { name: 'Active Customers', target: '500 developers + 1000 creators', timeframe: 'Year 1' },
        { name: 'Market Share', target: '5% of Web3 gaming payments', timeframe: 'Year 2' }
      ]
    },
    {
      category: 'Product Metrics',
      icon: Target,
      metrics: [
        { name: 'Web3 Feature Adoption', target: '25% of new customers', timeframe: 'Q4 2024' },
        { name: 'Creator Monetization', target: '$100M processed', timeframe: 'Year 1' },
        { name: 'Geographic Revenue', target: '10% from SEA market', timeframe: 'Q4 2024' },
        { name: 'DeFi Assets Under Management', target: '$50M', timeframe: 'Q4 2024' }
      ]
    },
    {
      category: 'Operational Metrics',
      icon: Shield,
      metrics: [
        { name: 'System Uptime', target: '99.95%', timeframe: 'Ongoing' },
        { name: 'Fraud Rate', target: '<0.05%', timeframe: 'Gaming transactions' },
        { name: 'Customer Satisfaction', target: 'NPS > 60', timeframe: 'Quarterly' },
        { name: 'Compliance Rate', target: '100%', timeframe: 'All jurisdictions' }
      ]
    }
  ];

  const riskMitigation = [
    {
      risk: 'Regulatory Changes',
      impact: 'High',
      mitigation: 'Proactive compliance monitoring, legal partnerships, regulatory sandbox participation',
      timeline: 'Ongoing'
    },
    {
      risk: 'Competitive Response',
      impact: 'Medium',
      mitigation: 'Accelerated feature development, exclusive partnerships, patent protection',
      timeline: 'Q1-Q2 2024'
    },
    {
      risk: 'Technical Scaling',
      impact: 'High',
      mitigation: 'Infrastructure investment, cloud-native architecture, performance monitoring',
      timeline: 'Q3-Q4 2024'
    },
    {
      risk: 'Market Adoption',
      impact: 'Medium',
      mitigation: 'Developer education, incentive programs, case study development',
      timeline: 'Q2-Q3 2024'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Strategic Roadmap</h1>
        <p className="text-xl text-muted-foreground">
          12-month implementation plan to capture $15M ARR across four strategic opportunities.
        </p>
      </div>

      {/* Quarterly Roadmap */}
      <div className="space-y-6">
        {quarterlyRoadmap.map((quarter, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    Q{index + 1}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{quarter.quarter} - {quarter.theme}</CardTitle>
                    <p className="text-muted-foreground">{quarter.focus}</p>
                  </div>
                </div>
                <Badge variant="default" className="text-lg px-3 py-1">
                  {quarter.revenue}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Key Initiatives */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>Key Initiatives</span>
                  </h4>
                  <ul className="space-y-2">
                    {quarter.keyInitiatives.map((initiative, initIndex) => (
                      <li key={initIndex} className="text-sm text-muted-foreground flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{initiative}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center space-x-2">
                    <Target className="h-5 w-5 text-green-600" />
                    <span>Key Deliverables</span>
                  </h4>
                  <ul className="space-y-2">
                    {quarter.deliverables.map((deliverable, delIndex) => (
                      <li key={delIndex} className="text-sm text-muted-foreground flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Success Metrics */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    <span>Success Metrics</span>
                  </h4>
                  <ul className="space-y-2">
                    {quarter.metrics.map((metric, metIndex) => (
                      <li key={metIndex} className="text-sm text-muted-foreground flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Resource Requirements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="h-6 w-6" />
            <span>Resource Requirements</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Team Scaling */}
            <div>
              <h4 className="font-semibold mb-4">Team Scaling Plan</h4>
              <div className="space-y-3">
                {resourceRequirements.team.map((dept, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-accent rounded-lg">
                    <div>
                      <div className="font-medium">{dept.department}</div>
                      <div className="text-sm text-muted-foreground">
                        {dept.current} → {dept.target} people
                      </div>
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {dept.growth}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            {/* Investment Requirements */}
            <div>
              <h4 className="font-semibold mb-4">Investment Requirements</h4>
              <div className="space-y-3">
                {resourceRequirements.investment.map((investment, index) => (
                  <div key={index} className="p-3 bg-accent rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">{investment.category}</div>
                      <div className="text-lg font-bold text-primary">{investment.amount}</div>
                    </div>
                    <div className="text-sm text-muted-foreground">{investment.description}</div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">$23M</div>
                  <div className="text-sm text-muted-foreground">Total Investment Required</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Success Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-6 w-6" />
            <span>Success Metrics & KPIs</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {successMetrics.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index}>
                  <h4 className="font-semibold mb-4 flex items-center space-x-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <span>{category.category}</span>
                  </h4>
                  <div className="space-y-3">
                    {category.metrics.map((metric, metIndex) => (
                      <div key={metIndex} className="p-3 bg-accent rounded-lg">
                        <div className="font-medium text-sm">{metric.name}</div>
                        <div className="text-lg font-bold text-primary">{metric.target}</div>
                        <div className="text-xs text-muted-foreground">{metric.timeframe}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Risk Mitigation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-6 w-6" />
            <span>Risk Assessment & Mitigation</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {riskMitigation.map((risk, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-foreground">{risk.risk}</h4>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={risk.impact === 'High' ? 'destructive' : 'secondary'}
                    >
                      {risk.impact} Impact
                    </Badge>
                    <Badge variant="outline">{risk.timeline}</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{risk.mitigation}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Implementation Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Implementation Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">$15M</div>
              <div className="text-sm text-blue-600 font-medium">ARR Target</div>
              <div className="text-xs text-muted-foreground">End of Year 1</div>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">+50</div>
              <div className="text-sm text-green-600 font-medium">Team Members</div>
              <div className="text-xs text-muted-foreground">Across all departments</div>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-sm text-purple-600 font-medium">Market Segments</div>
              <div className="text-xs text-muted-foreground">Web3, Creator, Global, DeFi</div>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 mb-2">12</div>
              <div className="text-sm text-orange-600 font-medium">Month Timeline</div>
              <div className="text-xs text-muted-foreground">Phased implementation</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StrategicRoadmap;


import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  TrendingUp, 
  DollarSign, 
  Globe, 
  Shield,
  Gamepad2,
  Zap,
  Users,
  Target
} from 'lucide-react';

const Overview = () => {
  const keyMetrics = [
    {
      icon: TrendingUp,
      title: 'Market Growth',
      value: '8.7%',
      subtitle: 'CAGR',
      description: 'Gaming market growth through 2030'
    },
    {
      icon: DollarSign,
      title: 'Target Revenue',
      value: '$15M',
      subtitle: 'ARR',
      description: 'Within 12 months across 4 opportunities'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      value: '10+',
      subtitle: 'Countries',
      description: 'Initial market coverage'
    },
    {
      icon: Shield,
      title: 'AI-Powered',
      value: 'Fraud',
      subtitle: 'Prevention',
      description: 'Advanced security framework'
    }
  ];

  const strategicPillars = [
    {
      icon: Gamepad2,
      title: 'Gaming Focus',
      description: 'Specialized payment solutions for gaming industry'
    },
    {
      icon: Zap,
      title: 'AI-Powered',
      description: 'Advanced fraud detection and prevention'
    },
    {
      icon: Users,
      title: 'Merchant of Record',
      description: 'Full compliance and liability management'
    },
    {
      icon: Target,
      title: 'Stablecoin Integration',
      description: 'Seamless global payments with crypto'
    }
  ];

  const opportunities = [
    {
      title: 'Web3 Gaming Payments',
      description: 'NFT checkout, play-to-earn payroll, cross-chain payments',
      target: '$20M ARR'
    },
    {
      title: 'Creator Economy Tools',
      description: 'Tipping, subscriptions, merchandise sales for streamers',
      target: '$10M ARR'
    },
    {
      title: 'Geographic Expansion',
      description: 'Southeast Asia and Latin America market entry',
      target: '$15M ARR'
    },
    {
      title: 'DeFi Treasury Services',
      description: 'Yield-generating services for gaming companies',
      target: '$5M ARR'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Breeze Cash Product Playbook</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Comprehensive Product Requirements Document and Strategic Roadmap for AI-powered payment platform.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="default">Gaming Payments</Badge>
          <Badge variant="secondary">AI-Powered Fraud Prevention</Badge>
          <Badge variant="secondary">Merchant of Record</Badge>
          <Badge variant="secondary">Stablecoin Integration</Badge>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.subtitle}</div>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{metric.title}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Executive Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Executive Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            This playbook outlines Breeze Cash's strategic expansion within the gaming payments ecosystem, 
            leveraging AI-powered fraud prevention and stablecoin integration to capture high-growth opportunities. 
            The analysis identifies four immediate opportunities with combined revenue potential of $50M ARR within 24 months.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="p-4 bg-accent rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">{opportunity.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{opportunity.description}</p>
                <div className="text-lg font-bold text-primary">{opportunity.target}</div>
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground mt-6">
            The roadmap leverages Breeze Cash's unique positioning as an AI-powered merchant of record 
            with gaming industry expertise to establish market leadership in Web3 gaming payments, 
            creator economy monetization, and global gaming payment infrastructure.
          </p>
        </CardContent>
      </Card>

      {/* Strategic Pillars */}
      <Card>
        <CardHeader>
          <CardTitle>Strategic Pillars</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategicPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-4 bg-accent rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{pillar.title}</h4>
                    <p className="text-sm text-muted-foreground">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Company Background */}
      <Card>
        <CardHeader>
          <CardTitle>Company Background</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">About Breeze Cash</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Founded:</strong> 2022 by Stripe alumni</li>
                <li>• <strong>Focus:</strong> AI-powered payment platform</li>
                <li>• <strong>Business Model:</strong> Merchant of Record</li>
                <li>• <strong>Scale:</strong> $1B+ processed annually</li>
                <li>• <strong>Backing:</strong> Sequoia Capital, Multicoin Capital</li>
                <li>• <strong>Team Size:</strong> 11-50 employees</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Core Value Proposition</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Gaming Specialization:</strong> Deep understanding of gaming payment needs</li>
                <li>• <strong>AI Fraud Prevention:</strong> Advanced protection for high-risk gaming transactions</li>
                <li>• <strong>Compliance Management:</strong> Full AML/KYC and tax handling</li>
                <li>• <strong>Stablecoin Integration:</strong> Global payments with crypto efficiency</li>
                <li>• <strong>Developer Experience:</strong> Single API for comprehensive payment stack</li>
                <li>• <strong>Risk Assumption:</strong> Takes on fraud and chargeback liability</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Market Position */}
      <Card>
        <CardHeader>
          <CardTitle>Market Position & Competitive Advantages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Unique Market Position</h4>
              <p className="text-sm text-green-600 dark:text-green-300">
                Only AI-powered merchant of record specifically designed for gaming payments, 
                combining Stripe-level expertise with gaming industry specialization and stablecoin integration.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-accent rounded-lg">
                <h5 className="font-medium mb-2">Technology Edge</h5>
                <p className="text-sm text-muted-foreground">
                  AI-powered fraud detection specifically trained on gaming transaction patterns
                </p>
              </div>
              <div className="p-3 bg-accent rounded-lg">
                <h5 className="font-medium mb-2">Industry Expertise</h5>
                <p className="text-sm text-muted-foreground">
                  Deep understanding of gaming monetization, player behavior, and industry challenges
                </p>
              </div>
              <div className="p-3 bg-accent rounded-lg">
                <h5 className="font-medium mb-2">Regulatory Advantage</h5>
                <p className="text-sm text-muted-foreground">
                  Merchant of record model removes compliance burden from game developers
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Overview;


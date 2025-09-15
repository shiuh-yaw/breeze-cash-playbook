import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  TrendingUp, 
  Globe, 
  Users, 
  Shield,
  Gamepad2,
  Smartphone,
  DollarSign,
  AlertTriangle
} from 'lucide-react';

const MarketAnalysis = () => {
  const marketData = [
    {
      title: 'Global Gaming Market',
      value: '$298.09B',
      growth: '8.7% CAGR',
      projection: '$505.17B by 2030',
      icon: Gamepad2
    },
    {
      title: 'Mobile Gaming',
      value: '$200B',
      growth: '4% YoY',
      projection: 'Approaching $200B in 2025',
      icon: Smartphone
    },
    {
      title: 'Microtransactions',
      value: '$57.89B',
      growth: '99% Growth',
      projection: '$115.06B by 2034',
      icon: DollarSign
    },
    {
      title: 'Player Engagement',
      value: '12% Sessions',
      growth: '8% Time Spent',
      projection: 'Increasing monetization',
      icon: Users
    }
  ];

  const competitors = [
    {
      name: 'Xsolla',
      category: 'Direct Competitor',
      focus: 'Gaming payment solutions',
      strengths: 'Established industry leader, extensive developer tools',
      weaknesses: 'Legacy infrastructure, less focus on crypto',
      marketShare: 'High'
    },
    {
      name: 'Stripe',
      category: 'Indirect Competitor',
      focus: 'General payment processing',
      strengths: 'Robust APIs, developer-friendly',
      weaknesses: 'Not gaming-specific, higher fraud risk',
      marketShare: 'Very High'
    },
    {
      name: 'MoonPay',
      category: 'Crypto Competitor',
      focus: 'Crypto on-ramp',
      strengths: 'Simple crypto purchases',
      weaknesses: 'Not focused on gaming payments',
      marketShare: 'Medium'
    },
    {
      name: 'PayPal',
      category: 'Traditional Competitor',
      focus: 'Consumer payment network',
      strengths: 'Large user base, brand recognition',
      weaknesses: 'High fees, less developer-focused',
      marketShare: 'Very High'
    }
  ];

  const regionalData = [
    {
      region: 'Europe',
      cryptoAdoption: '24%',
      growth: '22.7% CAGR',
      keyMarkets: 'UK, Germany, France',
      opportunity: 'High'
    },
    {
      region: 'Asia-Pacific',
      cryptoAdoption: '35%',
      growth: '12.3% CAGR',
      keyMarkets: 'Japan, South Korea, SEA',
      opportunity: 'Very High'
    },
    {
      region: 'North America',
      cryptoAdoption: '18%',
      growth: '8.1% CAGR',
      keyMarkets: 'US, Canada',
      opportunity: 'High'
    },
    {
      region: 'Latin America',
      cryptoAdoption: '28%',
      growth: '15.2% CAGR',
      keyMarkets: 'Brazil, Mexico, Argentina',
      opportunity: 'Very High'
    }
  ];

  const trends = [
    {
      trend: 'Web3 Gaming Growth',
      impact: 'High',
      description: 'Play-to-earn, NFTs, and metaverse payments creating new revenue streams',
      timeline: '2024-2026'
    },
    {
      trend: 'Creator Economy Expansion',
      impact: 'High',
      description: 'Streamers and content creators need monetization tools',
      timeline: '2024-2025'
    },
    {
      trend: 'Stablecoin Adoption',
      impact: 'Medium',
      description: 'Global payments becoming more efficient with stablecoins',
      timeline: '2024-2027'
    },
    {
      trend: 'AI Fraud Prevention',
      impact: 'High',
      description: 'Gaming transactions require advanced fraud detection',
      timeline: '2024-2025'
    }
  ];

  const getOpportunityColor = (level) => {
    switch (level) {
      case 'Very High': return 'bg-green-100 text-green-800 border-green-200';
      case 'High': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Market Analysis</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive analysis of the gaming payments market, competitive landscape, and strategic opportunities.
        </p>
      </div>

      {/* Market Size & Growth */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-6 w-6" />
            <span>Market Size & Growth</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketData.map((data, index) => {
              const Icon = data.icon;
              return (
                <div key={index} className="p-4 bg-accent rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <Icon className="h-8 w-8 text-primary" />
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{data.value}</div>
                      <div className="text-sm text-green-600 font-medium">{data.growth}</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{data.title}</h4>
                    <p className="text-sm text-muted-foreground">{data.projection}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Competitive Landscape */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-6 w-6" />
            <span>Competitive Landscape</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {competitors.map((competitor, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{competitor.name}</h4>
                    <Badge variant="outline" className="mt-1">{competitor.category}</Badge>
                  </div>
                  <Badge 
                    variant={competitor.marketShare === 'Very High' ? 'default' : 'secondary'}
                  >
                    {competitor.marketShare} Market Share
                  </Badge>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-foreground">Focus:</span>
                    <p className="text-muted-foreground">{competitor.focus}</p>
                  </div>
                  <div>
                    <span className="font-medium text-green-600">Strengths:</span>
                    <p className="text-muted-foreground">{competitor.strengths}</p>
                  </div>
                  <div>
                    <span className="font-medium text-red-600">Weaknesses:</span>
                    <p className="text-muted-foreground">{competitor.weaknesses}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Regional Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-6 w-6" />
            <span>Regional Market Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regionalData.map((region, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-foreground">{region.region}</h4>
                  <Badge className={getOpportunityColor(region.opportunity)}>
                    {region.opportunity} Opportunity
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Crypto Adoption:</span>
                    <span className="font-medium text-primary">{region.cryptoAdoption}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Gaming Growth:</span>
                    <span className="font-medium text-green-600">{region.growth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Key Markets:</span>
                    <span className="font-medium">{region.keyMarkets}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Market Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6" />
            <span>Key Market Trends</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {trends.map((trend, index) => (
              <div key={index} className="p-4 bg-accent rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-foreground">{trend.trend}</h4>
                  <div className="flex items-center space-x-2">
                    <Badge 
                      variant={trend.impact === 'High' ? 'default' : 'secondary'}
                    >
                      {trend.impact} Impact
                    </Badge>
                    <Badge variant="outline">{trend.timeline}</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{trend.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* SWOT Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>SWOT Analysis for Breeze Cash</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Strengths */}
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Strengths</h4>
              <ul className="space-y-2 text-sm text-green-600 dark:text-green-300">
                <li>• Gaming industry specialization and expertise</li>
                <li>• AI-powered fraud prevention technology</li>
                <li>• Merchant of Record model reduces developer burden</li>
                <li>• Strong VC backing (Sequoia, Multicoin)</li>
                <li>• Stripe alumni team with payments expertise</li>
                <li>• Stablecoin integration for global payments</li>
              </ul>
            </div>

            {/* Weaknesses */}
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3">Weaknesses</h4>
              <ul className="space-y-2 text-sm text-red-600 dark:text-red-300">
                <li>• Newer player vs. established competitors</li>
                <li>• Limited brand recognition in market</li>
                <li>• Smaller team compared to large processors</li>
                <li>• Concentrated risk in gaming industry</li>
                <li>• Need to build developer ecosystem</li>
              </ul>
            </div>

            {/* Opportunities */}
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Opportunities</h4>
              <ul className="space-y-2 text-sm text-blue-600 dark:text-blue-300">
                <li>• Web3 gaming and blockchain payments growth</li>
                <li>• Creator economy monetization expansion</li>
                <li>• Geographic expansion into high-growth markets</li>
                <li>• DeFi integration for gaming treasuries</li>
                <li>• Partnerships with game engines and platforms</li>
              </ul>
            </div>

            {/* Threats */}
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">Threats</h4>
              <ul className="space-y-2 text-sm text-yellow-600 dark:text-yellow-300">
                <li>• Regulatory changes affecting gaming/crypto payments</li>
                <li>• Incumbent players adding gaming features</li>
                <li>• Market saturation with payment providers</li>
                <li>• Economic downturn reducing gaming spend</li>
                <li>• Security breaches damaging reputation</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketAnalysis;


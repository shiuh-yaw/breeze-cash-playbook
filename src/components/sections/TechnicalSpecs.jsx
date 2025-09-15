import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Code, 
  Shield, 
  Zap, 
  Globe,
  Database,
  Cloud,
  Lock,
  Cpu
} from 'lucide-react';

const TechnicalSpecs = () => {
  const architectureComponents = [
    {
      name: 'API Gateway',
      description: 'RESTful API with GraphQL support for flexible data querying',
      technology: 'Node.js, Express, Apollo GraphQL',
      scalability: '10,000+ requests/second'
    },
    {
      name: 'Payment Engine',
      description: 'Core payment processing with multi-chain crypto support',
      technology: 'Go, Redis, PostgreSQL',
      scalability: '1,000+ transactions/second'
    },
    {
      name: 'AI Fraud Detection',
      description: 'Machine learning models for real-time fraud prevention',
      technology: 'Python, TensorFlow, Apache Kafka',
      scalability: 'Real-time inference <100ms'
    },
    {
      name: 'Blockchain Integration',
      description: 'Multi-chain support for Web3 gaming payments',
      technology: 'Web3.js, Ethers.js, Solana SDK',
      scalability: 'Cross-chain transactions'
    }
  ];

  const apiEndpoints = [
    {
      method: 'POST',
      endpoint: '/api/v1/payments',
      description: 'Create a new payment transaction',
      authentication: 'API Key + HMAC',
      rateLimit: '1000/hour'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/payments/{id}',
      description: 'Retrieve payment status and details',
      authentication: 'API Key',
      rateLimit: '5000/hour'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/nft/checkout',
      description: 'Process NFT purchase with crypto payments',
      authentication: 'API Key + HMAC',
      rateLimit: '500/hour'
    },
    {
      method: 'POST',
      endpoint: '/api/v1/creators/tip',
      description: 'Process tip payment to content creator',
      authentication: 'API Key + HMAC',
      rateLimit: '2000/hour'
    },
    {
      method: 'GET',
      endpoint: '/api/v1/analytics/dashboard',
      description: 'Retrieve payment analytics and metrics',
      authentication: 'API Key',
      rateLimit: '100/hour'
    }
  ];

  const securityFeatures = [
    {
      feature: 'AI-Powered Fraud Detection',
      description: 'Machine learning models trained on gaming transaction patterns',
      implementation: 'Real-time scoring with <100ms latency',
      compliance: 'PCI DSS Level 1'
    },
    {
      feature: 'Multi-Factor Authentication',
      description: 'TOTP, SMS, and hardware key support for admin access',
      implementation: 'OAuth 2.0 with PKCE',
      compliance: 'SOC 2 Type II'
    },
    {
      feature: 'End-to-End Encryption',
      description: 'AES-256 encryption for all sensitive data',
      implementation: 'TLS 1.3 for transport, AES-256-GCM at rest',
      compliance: 'GDPR, CCPA'
    },
    {
      feature: 'Blockchain Security',
      description: 'Multi-signature wallets and smart contract audits',
      implementation: 'Hardware security modules (HSM)',
      compliance: 'Crypto compliance frameworks'
    }
  ];

  const performanceMetrics = [
    {
      metric: 'API Response Time',
      target: '<200ms',
      current: '150ms avg',
      status: 'Excellent'
    },
    {
      metric: 'System Uptime',
      target: '99.95%',
      current: '99.97%',
      status: 'Excellent'
    },
    {
      metric: 'Transaction Throughput',
      target: '1000 TPS',
      current: '1200 TPS',
      status: 'Excellent'
    },
    {
      metric: 'Fraud Detection Accuracy',
      target: '>99%',
      current: '99.3%',
      status: 'Excellent'
    }
  ];

  const integrationSDKs = [
    {
      platform: 'JavaScript/TypeScript',
      description: 'Web and Node.js applications',
      features: ['Payment processing', 'Webhook handling', 'Analytics'],
      documentation: 'Complete with examples'
    },
    {
      platform: 'Python',
      description: 'Backend services and data analytics integration',
      features: ['Payment processing', 'Fraud detection APIs', 'Analytics dashboard'],
      documentation: 'Complete with examples'
    },
    {
      platform: 'React/Next.js',
      description: 'Frontend web applications and admin dashboards',
      features: ['Payment UI components', 'Analytics widgets', 'Admin panels'],
      documentation: 'Component library included'
    },
    {
      platform: 'Mobile (iOS/Android)',
      description: 'Native mobile app integration',
      features: ['Mobile payments', 'Biometric auth', 'Push notifications'],
      documentation: 'Platform-specific guides'
    }
  ];

  const complianceFrameworks = [
    {
      framework: 'PCI DSS Level 1',
      description: 'Payment card industry data security standard',
      status: 'Certified',
      renewal: 'Annual'
    },
    {
      framework: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      status: 'Certified',
      renewal: 'Annual'
    },
    {
      framework: 'ISO 27001',
      description: 'Information security management system',
      status: 'In Progress',
      renewal: 'Triennial'
    },
    {
      framework: 'GDPR Compliance',
      description: 'European data protection regulation',
      status: 'Compliant',
      renewal: 'Ongoing'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Excellent': return 'bg-green-100 text-green-800 border-green-200';
      case 'Good': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Fair': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-4">Technical Specifications</h1>
        <p className="text-xl text-muted-foreground">
          Comprehensive technical architecture, API documentation, and security framework for Breeze Cash platform.
        </p>
      </div>

      {/* System Architecture */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Cpu className="h-6 w-6" />
            <span>System Architecture</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {architectureComponents.map((component, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-foreground mb-2">{component.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{component.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Technology:</span>
                    <span className="font-medium">{component.technology}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Scalability:</span>
                    <span className="font-medium text-green-600">{component.scalability}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* API Documentation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Code className="h-6 w-6" />
            <span>API Endpoints</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {apiEndpoints.map((endpoint, index) => (
              <div key={index} className="p-4 bg-accent rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Badge 
                      variant={endpoint.method === 'POST' ? 'default' : 'secondary'}
                      className="font-mono"
                    >
                      {endpoint.method}
                    </Badge>
                    <code className="text-sm font-mono bg-background px-2 py-1 rounded">
                      {endpoint.endpoint}
                    </code>
                  </div>
                  <Badge variant="outline">{endpoint.rateLimit}</Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-2">{endpoint.description}</p>
                
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span>Auth: {endpoint.authentication}</span>
                  <span>Rate Limit: {endpoint.rateLimit}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">API Documentation</h4>
            <p className="text-sm text-blue-600 dark:text-blue-300">
              Complete API documentation with interactive examples, SDKs, and testing tools available at 
              <code className="ml-1 bg-blue-100 dark:bg-blue-800 px-1 rounded">docs.breeze.cash</code>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Security Framework */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-6 w-6" />
            <span>Security Framework</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {securityFeatures.map((security, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-foreground">{security.feature}</h4>
                  <Badge variant="outline">{security.compliance}</Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">{security.description}</p>
                
                <div className="text-sm">
                  <span className="text-muted-foreground">Implementation: </span>
                  <span className="font-medium">{security.implementation}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-6 w-6" />
            <span>Performance Metrics</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="p-4 bg-accent rounded-lg text-center">
                <h4 className="font-semibold text-foreground mb-2">{metric.metric}</h4>
                <div className="text-2xl font-bold text-primary mb-1">{metric.current}</div>
                <div className="text-sm text-muted-foreground mb-2">Target: {metric.target}</div>
                <Badge className={getStatusColor(metric.status)}>
                  {metric.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Integration SDKs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Database className="h-6 w-6" />
            <span>Integration SDKs</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {integrationSDKs.map((sdk, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">{sdk.platform}</h4>
                <p className="text-sm text-muted-foreground mb-3">{sdk.description}</p>
                
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium">Features:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {sdk.features.map((feature, featureIndex) => (
                        <Badge key={featureIndex} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-sm">
                    <span className="text-muted-foreground">Documentation: </span>
                    <span className="font-medium text-green-600">{sdk.documentation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Compliance & Certifications */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Lock className="h-6 w-6" />
            <span>Compliance & Certifications</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {complianceFrameworks.map((compliance, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-foreground">{compliance.framework}</h4>
                  <Badge 
                    variant={compliance.status === 'Certified' || compliance.status === 'Compliant' ? 'default' : 'secondary'}
                  >
                    {compliance.status}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-2">{compliance.description}</p>
                
                <div className="text-sm">
                  <span className="text-muted-foreground">Renewal: </span>
                  <span className="font-medium">{compliance.renewal}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Infrastructure & Deployment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Cloud className="h-6 w-6" />
            <span>Infrastructure & Deployment</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Cloud Infrastructure</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span><strong>Primary:</strong> AWS (us-east-1, eu-west-1)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span><strong>Backup:</strong> Google Cloud (multi-region)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span><strong>CDN:</strong> CloudFlare global network</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span><strong>Monitoring:</strong> DataDog, PagerDuty</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Deployment Strategy</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span><strong>CI/CD:</strong> GitHub Actions, Docker</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span><strong>Orchestration:</strong> Kubernetes (EKS)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span><strong>Database:</strong> PostgreSQL (RDS), Redis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span><strong>Scaling:</strong> Auto-scaling groups, load balancers</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-accent rounded-lg">
            <h4 className="font-semibold mb-2">Disaster Recovery</h4>
            <p className="text-sm text-muted-foreground">
              Multi-region deployment with automated failover, daily backups, and 4-hour RTO (Recovery Time Objective) 
              with 1-hour RPO (Recovery Point Objective) for critical payment data.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TechnicalSpecs;


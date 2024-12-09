import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface PricingTier {
  level: number;
  scans: number;
  price: number;
}

const pricingTiers: PricingTier[] = [
  { level: 1, scans: 100, price: 2000 },
  { level: 2, scans: 250, price: 3500 },
  { level: 3, scans: 500, price: 6500 },
  { level: 4, scans: 800, price: 8000 },
  { level: 5, scans: 1200, price: 20000 },
  {level: 6, scans: 1300, price: 30000}
]

export default function PricingStrategy() {
  return (
    <div className="w-full mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Hospital Pricing Strategies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6">
        {pricingTiers.map((tier) => (
          <Card key={tier.level} className="flex flex-col h-full">
            <CardHeader className="flex-grow">
              <CardTitle className="text-2xl mb-2">Level {tier.level}</CardTitle>
              <CardDescription>Hospital pricing strategy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">{tier.price.toLocaleString()} KSh</div>
              <p className="text-sm text-muted-foreground mb-4">per {tier.scans} scans</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Scans:</span>
                  <Badge variant="secondary">{tier.scans}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Per scan:</span>
                  <Badge variant="secondary">{(tier.price / tier.scans).toFixed(2)} KSh</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Select Plan</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
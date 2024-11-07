/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bell, ChevronLeft, Filter, Home, MessageSquare, Search, Settings, ShoppingCart, ThumbsDown, ThumbsUp, User } from "lucide-react"
import { Link } from "react-router-dom"
import { Image } from "lucide-react"

export default function FoodDetail() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <nav className="w-64 bg-white p-4 shadow-md hidden lg:block">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-2xl font-bold text-green-600">🥬 MANDEEP</span>
          <ChevronLeft className="w-6 h-6 text-gray-400" />
        </div>
        <div className="space-y-4">
          <NavItem icon={<Home className="w-5 h-5" />} label="Home" active />
          <NavItem icon={<MessageSquare className="w-5 h-5" />} label="NutriBalance" />
          <NavItem icon={<ShoppingCart className="w-5 h-5" />} label="Cart" />
          <NavItem icon={<User className="w-5 h-5" />} label="Your Orders" />
          <NavItem icon={<MessageSquare className="w-5 h-5" />} label="Share Your Experience" />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="relative w-64">
              <Input className="pl-10" placeholder="Search Your Cravings..." />
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-[600px]">
              <div className="relative">
                <img
                  src="/butter-chicken.jpg"
                  alt="Butter Chicken"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  #1 Most Popular dish
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <h1 className="text-5xl font-bold">Butter Chicken</h1>
                <p className="text-gray-600">
                  Tender marinated chicken in a rich, creamy tomato sauce with a perfect blend of aromatic spices.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" className="gap-2">
                    <MessageSquare className="w-4 h-4" /> Reviews
                  </Button>
                  <Button className="gap-2 bg-green-500 hover:bg-green-600">
                    <ShoppingCart className="w-4 h-4" /> Order Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="lg:w-[600px]">
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-green-500 rounded-lg p-4">
                      <span className="text-3xl font-bold text-white">4.7</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Butter Chicken</h3>
                      <p className="text-sm text-gray-600">Based on 1,234 reviews</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ThumbsUp className="h-5 w-5 text-green-500" />
                      <span>556 Likes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ThumbsDown className="h-5 w-5 text-red-500" />
                      <span>24 Dislikes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Nutritional Info</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Calories</span>
                      <span className="font-semibold">320 kcal</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Protein</span>
                      <span className="font-semibold">22g</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Carbs</span>
                      <span className="font-semibold">12g</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Fat</span>
                      <span className="font-semibold">18g</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Other Dishes Youll Love</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <DishCard
                image="/gob.jpg"
                name="Gobi Manchurian"
                rating={4.5}
              />
              <DishCard
                image="/grilled.jpg"
                name="Grilled Chicken"
                rating={4.3}
              />
              <DishCard
                image="/ita.jpg"
                name="Italian Fish"
                rating={4.6}
              />
              <DishCard
                image="/birii.webp"
                name="Chicken Biryani"
                rating={4.8}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

function NavItem({ icon, label, active = false }) {
  return (
    <Link
      to="/home"
      className={`flex items-center gap-2 p-2 rounded-lg ${
        active ? "bg-green-100 text-green-600" : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}

function DishCard({ image, name, rating }) {
  return (
    <Link href="#" className="group">
      <Card className="overflow-hidden transition-transform group-hover:scale-105">
        <div className="aspect-square relative">
          <img
            src={image}
            alt={name}
            className="object-cover"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-center mb-2">{name}</h3>
          <div className="flex items-center justify-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold">{rating.toFixed(1)}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

function Star(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

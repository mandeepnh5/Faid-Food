/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bell,
  ChevronLeft,
  Filter,
  Home,
  Image,
  MessageSquare,
  Settings,
  ShoppingCart,
  ThumbsUp,
  User,
} from "lucide-react";
// import Link from "next/link"
// import Image from "next/image"
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <nav className="w-64 bg-white p-4 shadow-md">
        <div className="flex items-center gap-2 mb-8">
          <span className="text-2xl font-bold text-green-600">🥬 RAJNY</span>
          <ChevronLeft className="w-6 h-6 text-gray-400" />
        </div>
        <div className="space-y-4">
          <NavItem icon={<Home className="w-5 h-5" />} label="Home" active />
          <NavItem
            icon={<MessageSquare className="w-5 h-5" />}
            label="NutriBalance"
          />
          <NavItem icon={<ShoppingCart className="w-5 h-5" />} label="Cart" />
          <NavItem icon={<User className="w-5 h-5" />} label="Your Orders" />
          <NavItem
            icon={<MessageSquare className="w-5 h-5" />}
            label="Share Your Experience"
          />
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <header className="flex justify-between items-center mb-8">
          <div className="relative">
            <Input
              className="w-80 pl-10"
              placeholder="Search Your Cravings..."
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
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
        </header>

        <h1 className="text-4xl font-bold mb-8">
          <span className="text-green-600">Welcome</span> Back, RAJNY!
        </h1>

        <div className="flex gap-4 mb-8">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">Today</Button>
          <Button variant="outline">Compare</Button>
        </div>

        <Tabs defaultValue="popular">
          <TabsList className="mb-4">
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="exotics">Exotics</TabsTrigger>
            <TabsTrigger value="other">Other Food Joints</TabsTrigger>
          </TabsList>
          <TabsContent value="popular">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FoodCard
                title="Butter Chicken"
                description="Tender marinated chicken in a rich, creamy tomato sauce with a perfect blend of aromatic spices."
                image="/but.jpg"
                comments={12}
                likes={100}
                tag="High"
              />
              <FoodCard
                title="Grilled Chicken"
                description="Succulent roasted chicken seasoned with herbs and served in a savory sauce."
                image="/grilled.jpg"
                comments={10}
                likes={80}
                tag="Med"
              />
              <FoodCard
                title="Veg Schezwan Noodles"
                description="Stir-fried noodles with a mix of crunchy vegetables in a spicy Schezwan sauce."
                image="/sch.jpg"
                comments={8}
                likes={75}
                tag="High"
              />
              <FoodCard
                title="Gobi Manchurian"
                description="Stir-fried noodles with a mix of crunchy vegetables in a spicy Schezwan sauce."
                image="/gob.jpg"
                comments={8}
                likes={75}
                tag="High"
              />
              <FoodCard
                title=" Chicken Lasagna"
                description="Stir-fried noodles with a mix of crunchy vegetables in a spicy Schezwan sauce."
                image="/lasa.jpg"
                comments={8}
                likes={75}
                tag="High"
              />
              <FoodCard
                title="Chicken Biryani"
                description="Stir-fried noodles with a mix of crunchy vegetables in a spicy Schezwan sauce."
                image="/birii.webp"
                comments={8}
                likes={75}
                tag="High"
              />
            </div>
          </TabsContent>
          <TabsContent value="exotics">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FoodCard
                title="Italian Fish"
                description="Italian fish featuring tender branzino or orata with zesty lemon, olive oil, and fresh herbs."
                image="/ita.jpg"
                comments={14}
                likes={5}
                tag="High"
              />
              <FoodCard
                title="Uramaki Sushi"
                description="Royal prawn is a succulent dish with grilled prawns tossed in olive oil, garlic, and lemon, finished with a hint of chili for a perfect blend of sweetness, spice, and rich flavor."
                image="/sus.jpg"
                comments={9}
                likes={10}
                tag="Low"
              />
            </div>
          </TabsContent>
          <TabsContent value="other">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FoodCard
                title="Zaitoon"
                description="Experience the flavors of authentic Mediterranean cuisine."
                image="/zaii.jpg"
                comments={57}
                likes={150}
                tag="Available"
              />
              <FoodCard
                title="Campus Cafe"
                description="Experience the fusion of homely food and fast food excitement."
                image="/cc.jpg"
                comments={12}
                likes={15}
                tag="Available"
              />
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <Link
      to="/home"
      className={`flex items-center gap-2 p-2 rounded-md ${
        active
          ? "bg-green-100 text-green-600"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

function FoodCard({ title, description, image, comments, likes, tag }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <Link to={"/food"}>
          <CardTitle className="text-lg">{title}</CardTitle>
        </Link>
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${getTagColor(
            tag
          )}`}
        >
          {tag}
        </span>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-start gap-4">
          <p className="text-sm text-gray-600">{description}</p>
          <img
            src={image}
            alt={title}
            width={100}
            height={100}
            className="rounded-md object-cover"
          />
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <MessageSquare className="w-4 h-4" />
            {comments} comments
          </span>
          <span className="flex items-center gap-1">
            <ThumbsUp className="w-4 h-4" />
            {likes} likes
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

function getTagColor(tag) {
  switch (tag.toLowerCase()) {
    case "high":
      return "bg-green-100 text-green-600";
    case "med":
      return "bg-yellow-100 text-yellow-600";
    case "low":
      return "bg-red-100 text-red-600";
    case "available":
      return "bg-blue-100 text-blue-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
}

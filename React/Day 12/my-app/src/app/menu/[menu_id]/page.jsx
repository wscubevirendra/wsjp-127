import React from "react";
import { getRecipeById } from "@/api/recipe";

export default async function Page({ params }) {
  const { menu_id } = await params;

  const recipe = await getRecipeById(menu_id);

  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Hero Section */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-md">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-[500px] object-cover"
          />

          <div className="p-8">
            <div className="flex flex-wrap justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-800">
                  {recipe.name}
                </h1>

                <p className="text-gray-500 mt-2">
                  {recipe.cuisine} • {recipe.difficulty}
                </p>
              </div>

              <div className="bg-green-600 text-white px-4 py-2 rounded-lg h-fit">
                ⭐ {recipe.rating}
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mt-6 text-gray-600">
              <span>⏱️ Prep: {recipe.prepTimeMinutes} mins</span>
              <span>🔥 Cook: {recipe.cookTimeMinutes} mins</span>
              <span>🍽️ Serves: {recipe.servings}</span>
              <span>🥗 {recipe.caloriesPerServing} Cal</span>
              <span>💬 {recipe.reviewCount} Reviews</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mt-10">

          {/* Ingredients */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-5">
              Ingredients
            </h2>

            <ul className="space-y-3">
              {recipe?.ingredients.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-gray-700"
                >
                  <span>✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-5">
              Instructions
            </h2>

            <div className="space-y-5">
              {recipe.instructions.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4"
                >
                  <div className="min-w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>

                  <p className="text-gray-700 leading-7">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Tags & Extra Info */}
        <div className="bg-white rounded-2xl p-6 shadow mt-8">
          <h2 className="text-2xl font-semibold mb-5">
            Recipe Details
          </h2>

          <div className="flex flex-wrap gap-3">
            {recipe?.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-red-100 text-red-600 px-4 py-2 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            {recipe?.mealType?.map((meal) => (
              <span
                key={meal}
                className="bg-gray-100 px-4 py-2 rounded-full"
              >
                🍴 {meal}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
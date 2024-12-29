import pasta from '@/images/pasta.jpg'
import burger from '@/images/burger.jpg'
import sandwich from '@/images/sandwich.jpg'
import salade from '@/images/salade.jpg'
import pancake from '@/images/pancake.jpg'

export const navLinks = [
    {
        id: 1,
        title: 'home',
        path: '/'
    },
    {
        id: 2,
        title: 'recipes',
        path: '/recipes'
    },
    {
        id: 3,
        title: 'favorites',
        path: '/favorites'
    },
]

export const categories = [
    { id: 0, name: 'All', query:'' },
    { id: 1, name: 'Vegetarian', query: 'vegetarian' },
    { id: 2, name: 'Vegan', query: 'vegan' },
    { id: 3, name: 'Desserts', query: 'desserts' },
    { id: 4, name: 'Gluten-Free', query: 'gluten free' },
    { id: 5, name: 'Keto', query: 'keto' },
    { id: 6, name: 'Paleo', query: 'paleo' },
    { id: 7, name: 'Breakfast', query: 'breakfast' },
    { id: 8, name: 'Lunch', query: 'lunch' },
    { id: 9, name: 'Dinner', query: 'dinner' },
    { id: 10, name: 'Snacks', query: 'snacks' }
  ];

export const featuredData = [
    {
        id: 1,
        title: 'pasta',
        desc: 'hola cracks me taol jsh...',
        img: pasta
    },
    {
        id: 2,
        title: 'burger',
        desc: 'hola cracks me taol jsh...',
        img: burger
    },
    {
        id: 3,
        title: 'sandwich',
        desc: 'hola cracks me taol jsh...',
        img: sandwich
    },
    {
        id: 4,
        title: 'pancake',
        desc: 'hola cracks me taol jsh...',
        img: pancake
    },
    {
        id: 5,
        title: 'salade',
        desc: 'hola cracks me taol jsh...',
        img: salade
    },
]

export const cuisines = [
    { id: 0, text: 'All' },
    { id: 1, text: "African" },
  { id: 2, text: "Asian" },
  { id: 3, text: "American" },
  { id: 4, text: "British" },
  { id: 5, text: "Cajun" },
  { id: 6, text: "Caribbean" },
  { id: 7, text: "Chinese" },
  { id: 8, text: "Eastern European" },
  { id: 9, text: "European" },
  { id: 10, text: "French" },
  { id: 11, text: "German" },
  { id: 12, text: "Greek" },
  { id: 13, text: "Indian" },
  { id: 14, text: "Irish" },
  { id: 15, text: "Italian" },
  { id: 16, text: "Japanese" },
  { id: 17, text: "Jewish" },
  { id: 18, text: "Korean" },
  { id: 19, text: "Latin American" },
  { id: 20, text: "Mediterranean" },
  { id: 21, text: "Mexican" },
  { id: 22, text: "Middle Eastern" },
  { id: 23, text: "Nordic" },
  { id: 24, text: "Southern" },
  { id: 25, text: "Spanish" },
  { id: 26, text: "Thai" },
  { id: 27, text: "Vietnamese" }
]

export const diets = [
    { id: 0, text: 'All' },
    { id: 1, text: 'Gluten Free' },
    { id: 2, text: 'Ketogenic' },
    { id: 3, text: 'Vegetarian' },
    { id: 4, text: 'Lacto-Vegetarian' },
    { id: 5, text: 'Ovo-Vegetarian' },
    { id: 6, text: 'Vegan' },
    { id: 7, text: 'Pescetarian' },
    { id: 8, text: 'Paleo' },
    { id: 9, text: 'Primal' },
    { id: 10, text: 'Low FODMAP' },
    { id: 11, text: 'Whole30' },
  ];
  
  
export const sortOptions = [
    { id: 0, text: 'All' },
    { id: 1, text: "Meta-Score" },
    { id: 2, text: "Popularity" },
    { id: 3, text: "Healthiness" },
    { id: 4, text: "Price" },
    { id: 5, text: "Time" },
    { id: 6, text: "Random" },
    { id: 7, text: "Max Used Ingredients" },
    { id: 8, text: "Min Missing Ingredients" },
    { id: 9, text: "Alcohol" },
    { id: 10, text: "Caffeine" },
    { id: 11, text: "Copper" },
    { id: 12, text: "Energy" },
    { id: 13, text: "Calories" },
    { id: 14, text: "Calcium" },
    { id: 15, text: "Carbohydrates" },
    { id: 16, text: "Carbs" },
    { id: 17, text: "Choline" },
    { id: 18, text: "Cholesterol" },
    { id: 19, text: "Total Fat" },
    { id: 20, text: "Fluoride" },
    { id: 21, text: "Trans Fat" },
    { id: 22, text: "Saturated Fat" },
    { id: 23, text: "Mono Unsaturated Fat" },
    { id: 24, text: "Poly Unsaturated Fat" },
    { id: 25, text: "Fiber" },
    { id: 26, text: "Folate" },
    { id: 27, text: "Folic Acid" },
    { id: 28, text: "Iodine" },
    { id: 29, text: "Iron" },
    { id: 30, text: "Magnesium" },
    { id: 31, text: "Manganese" },
    { id: 32, text: "Vitamin B3 (Niacin)" },
    { id: 33, text: "Vitamin B5 (Pantothenic Acid)" },
    { id: 34, text: "Phosphorus" },
    { id: 35, text: "Potassium" },
    { id: 36, text: "Protein" },
    { id: 37, text: "Vitamin B2 (Riboflavin)" },
    { id: 38, text: "Selenium" },
    { id: 39, text: "Sodium" },
    { id: 40, text: "Vitamin B1 (Thiamin)" },
    { id: 41, text: "Vitamin A" },
    { id: 42, text: "Vitamin B6" },
    { id: 43, text: "Vitamin B12" },
    { id: 44, text: "Vitamin C" },
    { id: 45, text: "Vitamin D" },
    { id: 46, text: "Vitamin E" },
    { id: 47, text: "Vitamin K" },
    { id: 48, text: "Sugar" },
    { id: 49, text: "Zinc" }
  ];
  
 export const sortData = (data, sortOption) => {
    switch (sortOption) {
      case "Popularity":
        return data.sort((a, b) => b.popularity - a.popularity);
      case "Calories":
        return data.sort((a, b) => a.calories - b.calories);
      case "Time":
        return data.sort((a, b) => a.time - b.time);
      // Add other cases for additional attributes
      default:
        return data;
    }
  };
  
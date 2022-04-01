import { Category, ICategory } from '../category'

const categories: ICategory[] = [
  {
    name: 'Housing',
    description:
      'Mortgage, Rent, Home insurance, Property tax, HOA, Home Maintenance, Home Improvement, Home Security',
    icon: 'fa-house',
  },
  {
    name: 'Transporation',
    description:
      'Auto loan, Registration, Gas, Road/Bridge toll, Auto maintenance, Public transportation, Parking, Roadside assistance (onstar), Other forms of transportation and associated maintenance (bike, motorcycle, recreation vehicles)',
    icon: 'fa-car-side',
  },
  {
    name: 'Personal Care',
    description:
      'Haircuts, Hair Color, Nail salon, Massage/Spa, Beauty products, Acupuncture',
    icon: 'fa-hand-sparkles',
  },
  {
    name: 'Pets',
    description:
      'Federal income, State, Property, Business, Accountant fees, Filing fees',
    icon: 'fa-paw',
  },
  {
    name: 'Giving',
    description: 'Charities, Church, Political',
    icon: 'fa-hand-holding-heart',
  },
  {
    name: 'Food',
    description:
      "Groceries, Restaurants, Fast Food, Work meals, Meal service, Children's hot school lunches, Coffee shops, Alcohol",
    icon: 'fa-utensils',
  },
  {
    name: 'Clothes',
    description:
      'New clothes, Shool clothes, Professional clothes, Uniform, Dry cleaning',
    icon: 'fa-shirt',
  },
  {
    name: 'Home Supplies',
    description:
      'Cleaning supplies, General household supplies, Office products, Furniture, Bedding/decor, Pool/yard care, Tools',
    icon: 'fa-couch',
  },
  {
    name: 'Child Expenses',
    description:
      'Childcare, School tuition, After school activities, Sports, Summer camps, Toys, Allowance, Baby expenses, School supplies, Child support',
    icon: 'fa-child',
  },
  {
    name: 'Gifts',
    description: 'Holiday, Birthday, Wedding/shower, Service worker gifts',
    icon: 'fa-gift',
  },
  {
    name: 'Fun',
    description:
      'Going out, Events, Travel, Hobbies, Hosting/entertaining, Books, New technology.',
    icon: 'fa-champagne-glasses',
  },
  {
    name: 'Healthcare',
    description:
      "Doctor's office visits, Specialty care, Mental health visits, Dental care, Vision care, Prescriptions, Over the counter medications, Vitamins/supplements",
    icon: 'fa-hospital',
  },
  {
    name: 'Services/Membership',
    description:
      'Yard care, House cleaning service, Meal delivery service, Gym, Magazines, Professional society dues, Music, TV streaming services, Amazon Prime, Costco, Software subscriptions, Identity theft, Netflix, DisneyPlus',
    icon: 'fa-dumbbell',
  },
  {
    name: 'Utilities',
    description:
      'Electric, Gas, Phone, Cable, Internet, Water, Sewer, Trash, Recycling, Yard waste',
    icon: 'fa-bolt',
  },
  {
    name: 'Miscellaneous',
    description:
      "Anything that doesn't quite fit into any category, Unusual non-recurring expenses",
    icon: 'fa-thumbtack',
  },
]

const categorySeeder = () =>
  Category.create(categories).then((value) =>
    console.log({ message: `successfully seeded ${value.length} categories` }),
  )

export default categorySeeder

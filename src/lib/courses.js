export async function getCourses() {
    // In a real application, this would be an API call
    return [
      { id: 1, title: 'Introduction to Physics', description: 'Learn the basics of physics', originalPrice: 99.99, discountedPrice: 79.99 },
      { id: 2, title: 'Advanced Chemistry', description: 'Dive deep into chemical reactions', originalPrice: 129.99, discountedPrice: 99.99 },
      { id: 3, title: 'Biology Fundamentals', description: 'Explore the science of life', originalPrice: 89.99, discountedPrice: 69.99 },
    ];
  }
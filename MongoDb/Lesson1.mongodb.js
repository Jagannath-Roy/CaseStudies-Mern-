use("Database1");



db.Lesson1.aggregate([
  { $match: { year: 2024 } },

  {
    $group: {
      _id: "$genre",
      totalViews: { $sum: "$views" },
      avgRating: { $avg: "$rating" }
    }
  },

  { $match: { totalViews: { $gt: 10000 } } },

  {
    $project: {
      _id: 0,
      genre: "$_id",
      avgRating: { $round: ["$avgRating", 2] }
    }
  }
])

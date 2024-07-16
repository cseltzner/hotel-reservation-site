using API.Models;

namespace API.Context;

public static class SeedData
{
    /// <summary>
    /// Seed database with sample data if data does not already exist
    /// </summary>
    /// <param name="context">Database context to seed data into</param>
    public static async Task Seed(BookingContext context)
    {
        // Payment Method data
        if (!context.PaymentMethods.Any())
        {
            var paymentMethods = new List<PaymentMethod>
            {
                new PaymentMethod
                {
                    Id = 1,
                    Name = "In Person - Cash/Card"
                },
                new PaymentMethod
                {
                    Id = 2,
                    Name = "Check - Mailed"
                }
            };

            context.PaymentMethods.AddRange(paymentMethods);
        }

        // Services data
        if (!context.Services.Any())
        {
            var services = new List<Service>
            {
                new Service
                {
                    Id = 1,
                    Name = "Daily Room Cleaning",
                    Cost = 25
                },
                new Service
                {
                    Id = 2,
                    Name = "VIP Parking",
                    Cost = 30
                },
                new Service
                {
                    Id = 3,
                    Name = "Room Service",
                    Cost = 40
                },
                new Service
                {
                    Id = 4,
                    Name = "Spa Access",
                    Cost = 25
                }
            };

            context.Services.AddRange(services);
        }

        // Features data

        var featureKingBeds = new Feature
        {
            Id = 1,
            FeatureName = "King beds"
        };

        var featureKingBed = new Feature
        {
            Id = 2,
            FeatureName = "King bed"
        };

        var featureExerciseRoom = new Feature
        {
            Id = 3,
            FeatureName = "Exercise room"
        };

        var featureSwimmingPool = new Feature
        {
            Id = 4,
            FeatureName = "Swimming pool"
        };

        var featureAirport = new Feature
            {
                Id = 5,
                FeatureName = "Near the airport"
            };

        var featureFridge = new Feature
        {
            Id = 6,
            FeatureName = "Fridge and freezer"
        };

        var featureBreakfast = new Feature
        {
            Id = 7,
            FeatureName = "Complementary breakfast"
        };

        var featureAmenities = new Feature
        {
            Id = 8,
            FeatureName = "Bathroom amenities"
        };

        var featureCoffee = new Feature
        {
            Id = 9,
            FeatureName = "Coffee maker"
        };

        var featureGiftShop = new Feature
            {
                Id = 10,
                FeatureName = "Gift shop"
            };

        var featureBar = new Feature
        {
            Id = 11,
            FeatureName = "Full bar"
        };

        var featureSeaside = new Feature
        {
            Id = 12,
            FeatureName = "Seaside view"
        };

        var features = new List<Feature>
        {
            featureKingBeds,
            featureKingBed,
            featureExerciseRoom,
            featureSwimmingPool,
            featureAirport,
            featureFridge,
            featureBreakfast,
            featureAmenities,
            featureCoffee,
            featureGiftShop,
            featureBar,
            featureSeaside
        };

        if (!context.Features.Any())
        {
            context.AddRange(features);
        }


        // Rooms
        if (!context.Rooms.Any())
        {
            var rooms = new List<Room>
            {
                new Room
                {
                    Id = 1,
                    Name = "Basic Suite",
                    NumBeds = 2,
                    MaxGuests = 3,
                    BasePrice = 300,
                    AdditionalGuestPrice = 35,
                    PrimaryImageUrl = "https://res.cloudinary.com/dnxdsagpg/image/upload/v1720292326/hotel-site/basic-suite/basic-main.jpg",
                    SecondaryImageUrls = new List<string>
                    {
                        "https://res.cloudinary.com/dnxdsagpg/image/upload/v1720292326/hotel-site/basic-suite/basic-1.jpg",
                        "https://res.cloudinary.com/dnxdsagpg/image/upload/v1720292326/hotel-site/basic-suite/basic-2.jpg",
                        "https://res.cloudinary.com/dnxdsagpg/image/upload/v1720292326/hotel-site/basic-suite/basic-3.jpg"
                    },
                    Features = new List<Feature>
                    {
                        featureKingBeds,
                        featureExerciseRoom,
                        featureSwimmingPool,
                        featureAirport,
                        featureFridge,
                        featureBreakfast,
                        featureAmenities,
                        featureCoffee,
                        featureGiftShop,
                        featureBar
                    }
                },
                new Room
                {
                    Id = 2,
                    Name = "Seaside Suite",
                    NumBeds = 2,
                    MaxGuests = 4,
                    BasePrice = 550,
                    AdditionalGuestPrice = 50,
                    PrimaryImageUrl = "https://res.cloudinary.com/dnxdsagpg/image/upload/v1720293416/hotel-site/seaside-suite/seaside-main.jpg",
                    SecondaryImageUrls = new List<string>
                    {
                        "https://res.cloudinary.com/dnxdsagpg/image/upload/v1720293416/hotel-site/seaside-suite/seaside-1.jpg",
                        "https://res.cloudinary.com/dnxdsagpg/image/upload/v1720293416/hotel-site/seaside-suite/seaside-2.jpg",
                        "https://res.cloudinary.com/dnxdsagpg/image/upload/v1720293416/hotel-site/seaside-suite/seaside-3.jpg",
                    },
                    Features = new List<Feature>
                    {
                        featureSeaside,
                        featureKingBeds,
                        featureExerciseRoom,
                        featureSwimmingPool,
                        featureFridge,
                        featureBreakfast,
                        featureAmenities,
                        featureCoffee,
                        featureGiftShop,
                        featureBar
                    }
                },
                new Room
                {
                    Id = 3,
                    Name = "Single Suite",
                    NumBeds = 1,
                    MaxGuests = 2,
                    BasePrice = 150,
                    AdditionalGuestPrice = 25,
                    PrimaryImageUrl = "https://res.cloudinary.com/dnxdsagpg/image/upload/v1720293796/hotel-site/single-suite/single-main.jpg",
                    SecondaryImageUrls = new List<string>
                    {
                        "https://res.cloudinary.com/dnxdsagpg/image/upload/v1720293796/hotel-site/single-suite/single-1.jpg",
                        "https://res.cloudinary.com/dnxdsagpg/image/upload/v1720293796/hotel-site/single-suite/single-2.jpg",
                        "https://res.cloudinary.com/dnxdsagpg/image/upload/v1720293796/hotel-site/single-suite/single-3.jpg",
                    },
                    Features = new List<Feature>
                    {
                        featureKingBed,
                        featureExerciseRoom,
                        featureSwimmingPool,
                        featureAirport,
                        featureFridge,
                        featureBreakfast,
                        featureAmenities,
                        featureCoffee,
                        featureGiftShop,
                        featureBar
                    }
                },
                new Room
                {
                    Id = 4,
                    Name = "Luxury Suite",
                    NumBeds = 2,
                    MaxGuests = 4,
                    BasePrice = 500,
                    AdditionalGuestPrice = 50,
                    PrimaryImageUrl = "https://res.cloudinary.com/dnxdsagpg/image/upload/v1720293066/hotel-site/luxury-suite/luxury-main.jpg",
                    SecondaryImageUrls = new List<string>
                    {
                        "https://res.cloudinary.com/dnxdsagpg/image/upload/v1720293066/hotel-site/luxury-suite/luxury-1.jpg",
                        "https://res.cloudinary.com/dnxdsagpg/image/upload/v1720293066/hotel-site/luxury-suite/luxury-2.jpg",
                        "https://res.cloudinary.com/dnxdsagpg/image/upload/v1720293066/hotel-site/luxury-suite/luxury-3.jpg",
                    },
                    Features = new List<Feature>
                    {
                        featureKingBeds,
                        featureExerciseRoom,
                        featureSwimmingPool,
                        featureAirport,
                        featureFridge,
                        featureBreakfast,
                        featureAmenities,
                        featureCoffee,
                        featureGiftShop,
                        featureBar
                    }
                },
                new Room
                {
                    Id = 5,
                    Name = "Jumbo Suite",
                    NumBeds = 3,
                    MaxGuests = 6,
                    BasePrice = 400,
                    AdditionalGuestPrice = 50,
                    PrimaryImageUrl = "https://res.cloudinary.com/dnxdsagpg/image/upload/v1720292794/hotel-site/jumbo-room/jumbo-main.jpg",
                    SecondaryImageUrls = new List<string>
                    {
                        "https://res.cloudinary.com/dnxdsagpg/image/upload/v1720292794/hotel-site/jumbo-room/jumbo-1.jpg",
                        "https://res.cloudinary.com/dnxdsagpg/image/upload/v1720292794/hotel-site/jumbo-room/jumbo-2.jpg",
                        "https://res.cloudinary.com/dnxdsagpg/image/upload/v1720292794/hotel-site/jumbo-room/jumbo-3.jpg"
                    },
                    Features = new List<Feature>
                    {
                        featureKingBeds,
                        featureExerciseRoom,
                        featureSwimmingPool,
                        featureAirport,
                        featureFridge,
                        featureBreakfast,
                        featureAmenities,
                        featureCoffee,
                        featureGiftShop,
                        featureBar
                    }
                },
            };
            context.Rooms.AddRange(rooms);
        }

        await context.SaveChangesAsync();
    }
}
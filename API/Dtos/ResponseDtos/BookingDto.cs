using API.Models;

namespace API.Dtos.ResponseDtos;

public class BookingDto
{
    public int Id { get; set; }
    public DateTime BookingCreatedDate { get; set; } = DateTime.UtcNow;
    public List<BookingRoom> BookingRooms { get; set; }
    public double BookingTotal { get; set; }
    public string? OrderNotes { get; set; }
    public GuestDto Guest { get; set; }
    public PaymentMethod PaymentMethod { get; set; }
}

/********************
 * Example response *
*********************/

/*
[
     {
       "id": 2,
       "bookingCreatedDate": "2024-06-20T20:37:00.000237Z",
       "bookingRooms": [
         {
           "id": 3,
           "checkInDate": "2024-01-20T20:42:25.238Z",
           "checkOutDate": "2024-01-21T20:42:25.238Z",
           "numOfNights": 1,
           "numGuests": 2,
           "totalPrice": 390,
           "extraServices": null,
           "roomId": 1,
           "room": {
             "id": 1,
             "name": "Basic Suite",
             "basePrice": 300,
             "additionalGuestPrice": 35,
             "maxGuests": 3,
             "numBeds": 2,
             "primaryImageUrl": "https://res.cloudinary.com/dnxdsagpg/image/upload/f_auto,q_auto/v1/hotel-site/basic-suite/basic-suite-main",
             "secondaryImageUrls": [
               "https://res.cloudinary.com/dnxdsagpg/image/upload/f_auto,q_auto/v1/hotel-site/basic-suite/basic-1",
               "https://res.cloudinary.com/dnxdsagpg/image/upload/f_auto,q_auto/v1/hotel-site/basic-suite/basic-2",
               "https://res.cloudinary.com/dnxdsagpg/image/upload/f_auto,q_auto/v1/hotel-site/basic-suite/basic-3"
             ],
             "features": [
               {
                 "id": 1,
                 "featureName": "King beds"
               },
               {
                 "id": 3,
                 "featureName": "Exercise room"
               },
             ]
           }
         },
         {
           "id": 4,
           "checkInDate": "2024-01-20T20:42:25.238Z",
           "checkOutDate": "2024-01-22T20:42:25.238Z",
           "numOfNights": 2,
           "numGuests": 2,
           "totalPrice": 1330,
           "extraServices": null,
           "roomId": 2,
           "room": {
             "id": 2,
             "name": "Seaside Suite",
             "basePrice": 550,
             "additionalGuestPrice": 50,
             "maxGuests": 4,
             "numBeds": 2,
             "primaryImageUrl": "https://res.cloudinary.com/dnxdsagpg/image/upload/f_auto,q_auto/v1/hotel-site/seaside-suite/seaside-main",
             "secondaryImageUrls": [
               "https://res.cloudinary.com/dnxdsagpg/image/upload/f_auto,q_auto/v1/hotel-site/seaside-suite/seaside-2",
               "https://res.cloudinary.com/dnxdsagpg/image/upload/f_auto,q_auto/v1/hotel-site/seaside-suite/seaside-3",
               "https://res.cloudinary.com/dnxdsagpg/image/upload/f_auto,q_auto/v1/hotel-site/seaside-suite/seaside-4"
             ],
             "features": [
               {
                 "id": 1,
                 "featureName": "King beds"
               },
               {
                 "id": 3,
                 "featureName": "Exercise room"
               },
             ]
           }
         }
       ],
       "bookingTotal": 1720,
       "orderNotes": "This is a test booking",
       "guest": {
         "id": 2,
         "email": "Guest2@guest.com",
         "firstName": "Guest",
         "lastName": "Two",
         "companyName": "test company",
         "country": "United States",
         "address": "123 Test Dr.",
         "address2": "",
         "city": "Testville",
         "state": "Ca",
         "zip": "12345",
         "phone": "1234567890"
       },
       "paymentMethod": {
         "id": 1,
         "name": "Cash - In person"
       }
     }
   ]
*/
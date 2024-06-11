using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Context;

public class BookingContext: DbContext
{
    public BookingContext(DbContextOptions<BookingContext> contextOptions): base(contextOptions){}

    public DbSet<Booking> Bookings { get; set; }
    public DbSet<Guest> Guests { get; set; }
    public DbSet<Service> Services { get; set; }
    public DbSet<Room> Rooms { get; set; }
}
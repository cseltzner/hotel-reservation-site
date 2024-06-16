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
    public DbSet<PaymentMethod> PaymentMethods { get; set; }
    public DbSet<Feature> Features { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Room>()
            .HasMany(e => e.Features)
            .WithMany();
    }
}
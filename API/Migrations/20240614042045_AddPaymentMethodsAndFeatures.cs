using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    /// <inheritdoc />
    public partial class AddPaymentMethodsAndFeatures : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_PaymentMethod_PaymentMethodId",
                table: "Bookings");

            migrationBuilder.DropForeignKey(
                name: "FK_Feature_Rooms_RoomId",
                table: "Feature");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PaymentMethod",
                table: "PaymentMethod");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Feature",
                table: "Feature");

            migrationBuilder.RenameTable(
                name: "PaymentMethod",
                newName: "PaymentMethods");

            migrationBuilder.RenameTable(
                name: "Feature",
                newName: "Features");

            migrationBuilder.RenameIndex(
                name: "IX_Feature_RoomId",
                table: "Features",
                newName: "IX_Features_RoomId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PaymentMethods",
                table: "PaymentMethods",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Features",
                table: "Features",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_PaymentMethods_PaymentMethodId",
                table: "Bookings",
                column: "PaymentMethodId",
                principalTable: "PaymentMethods",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Features_Rooms_RoomId",
                table: "Features",
                column: "RoomId",
                principalTable: "Rooms",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bookings_PaymentMethods_PaymentMethodId",
                table: "Bookings");

            migrationBuilder.DropForeignKey(
                name: "FK_Features_Rooms_RoomId",
                table: "Features");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PaymentMethods",
                table: "PaymentMethods");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Features",
                table: "Features");

            migrationBuilder.RenameTable(
                name: "PaymentMethods",
                newName: "PaymentMethod");

            migrationBuilder.RenameTable(
                name: "Features",
                newName: "Feature");

            migrationBuilder.RenameIndex(
                name: "IX_Features_RoomId",
                table: "Feature",
                newName: "IX_Feature_RoomId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PaymentMethod",
                table: "PaymentMethod",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Feature",
                table: "Feature",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Bookings_PaymentMethod_PaymentMethodId",
                table: "Bookings",
                column: "PaymentMethodId",
                principalTable: "PaymentMethod",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Feature_Rooms_RoomId",
                table: "Feature",
                column: "RoomId",
                principalTable: "Rooms",
                principalColumn: "Id");
        }
    }
}

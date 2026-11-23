# E-Commerce Backend

A modular, scalable E-Commerce backend built with **Node.js**, **TypeScript**, and **Prisma ORM 7** with PostgreSQL.

---

## 📁 Project Structure

```
├── prisma/
│   ├── schema/                       # Multi-file modular Prisma schemas
│   │   ├── schema.prisma             # Generator & Datasource
│   │   ├── enum.schema.prisma        # All 23 Enums
│   │   ├── user.schema.prisma        # User, UserProfile, Address
│   │   ├── auth.schema.prisma        # Roles, Permissions, Sessions, OAuth, Tokens
│   │   ├── category.schema.prisma    # Categories
│   │   ├── brand.schema.prisma       # Brands
│   │   ├── product.schema.prisma     # Products, Variants, Options, Attributes, Tags
│   │   ├── inventory.schema.prisma   # Warehouses, Inventory, Movements, Reservations
│   │   ├── cart.schema.prisma        # Carts & Cart Items
│   │   ├── wishlist.schema.prisma    # Wishlists & Wishlist Items
│   │   ├── order.schema.prisma       # Orders & Order Items
│   │   ├── payment.schema.prisma     # Payments, Transactions, Webhooks, Refunds
│   │   ├── coupon.schema.prisma      # Coupons & Usages
│   │   ├── shipping.schema.prisma    # Shipping Zones, Rates, Shipments, Tracking, Tax
│   │   ├── review.schema.prisma      # Reviews & Images
│   │   ├── return.schema.prisma      # Return Requests & Return Items
│   │   ├── support.schema.prisma     # Support Tickets & Messages
│   │   ├── notification.schema.prisma# Notifications & Email Logs
│   │   └── system.schema.prisma      # Banners, Site Settings, Audit Logs
│   └── migrations/                   # Database migrations
├── lib/
│   └── prisma.ts                     # Prisma Client singleton with PostgreSQL adapter
├── src/
│   └── index.ts                      # Application entry point
├── generated/                        # Generated Prisma client (git-ignored)
├── package.json                      # Project dependencies & scripts
├── tsconfig.json                     # TypeScript configuration
└── .env                              # Environment variables (DATABASE_URL)
```

---

## 🚀 Available Scripts

### Development & Build
- `pnpm dev` - Start development server with live watch mode (`tsx watch src/index.ts`)
- `pnpm build` - Compile TypeScript to JavaScript (`dist/`)
- `pnpm start` - Run compiled production code (`node dist/src/index.js`)
- `pnpm typecheck` - Run TypeScript type-checker without emitting files

### Database & Prisma
- `pnpm db:generate` - Generate Prisma Client into `generated/prisma`
- `pnpm db:validate` - Validate all modular Prisma schemas
- `pnpm db:format` - Automatically format all Prisma schema files
- `pnpm db:migrate` - Create and apply new migrations in development
- `pnpm db:push` - Push schema changes directly to the database without migrations
- `pnpm db:studio` - Open Prisma Studio to browse and edit data visually

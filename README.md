# Food Delivery App

Web app giao đồ ăn — giao diện cho khách hàng và nhà hàng/đầu bếp.

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Database | PostgreSQL via Neon |
| ORM | Prisma v7 |
| Auth | NextAuth.js v5 (Auth.js) |
| Deploy | Vercel |

## Cấu trúc project

```
src/
├── app/
│   ├── (auth)/          # /login, /register
│   ├── (customer)/      # trang chủ, xem nhà hàng, đặt hàng
│   ├── (restaurant)/    # dashboard nhà hàng (role: RESTAURANT)
│   └── api/auth/        # NextAuth handler
├── components/ui/       # UI components dùng chung
├── lib/
│   ├── db.ts            # Prisma client singleton
│   ├── auth.config.ts   # NextAuth config (edge-safe)
│   └── auth.ts          # NextAuth full config + Prisma adapter
├── types/
│   └── next-auth.d.ts   # Type augmentation
└── middleware.ts        # Route protection
prisma/
└── schema.prisma        # Database schema
```

## Bắt đầu

### 1. Cài dependencies
```bash
npm install
```

### 2. Cấu hình env
```bash
cp .env.example .env.local
# Điền DATABASE_URL và AUTH_SECRET vào .env.local
```

### 3. Tạo database trên Neon
1. Tạo tài khoản tại https://neon.tech
2. Tạo project mới → copy Connection string (pooled)
3. Paste vào DATABASE_URL trong .env.local

### 4. Chạy migration
```bash
npx prisma migrate dev --name init
```

### 5. Chạy dev server
```bash
npm run dev
```

## Deploy lên Vercel

1. Push code lên GitHub
2. Import repo vào vercel.com
3. Thêm env vars: DATABASE_URL, AUTH_SECRET, NEXTAUTH_URL
4. Deploy

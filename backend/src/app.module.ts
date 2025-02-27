import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ReconciliationModule } from './reconciliation/reconciliation.module';
import { BookService } from './book/book.service';
import { BookModule } from './book/book.module';
import { ComplianceModule } from './compliance/compliance.module';
import { AuthModule } from './auth/auth.module';
import { PositionsModule } from './positions/positions.module';
import { CounterpartyModule } from './counterparty/counterparty.module';
import { CompanyModule } from './company/company.module';
import { UserModule } from './user/user.module';
import { MarketModule } from './market/market.module';

@Module({
  imports: [
    PrismaModule,
    ReconciliationModule,
    BookModule,
    ComplianceModule,
    AuthModule,
    PositionsModule,
    CounterpartyModule,
    CompanyModule,
    UserModule,
    MarketModule,
  ],
  providers: [BookService],
})
export class AppModule {}

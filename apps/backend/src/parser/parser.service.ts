import { Injectable, NotFoundException } from '@nestjs/common';
import { chromium } from 'playwright';
import { PrismaService } from '../prisma/prisma.service.js';
import { extractPrice } from './helpers/extract-price.js';

@Injectable()
export class ParserService {
  constructor(private prisma: PrismaService) {}

  async checkLink(competitorLinkId: string) {
    const competitorLink = await this.prisma.competitorLink.findUnique({
      where: {
        id: competitorLinkId,
      },
    });

    if (!competitorLink) {
      throw new NotFoundException('Ссылка конкурента не найдена!');
    }

    const browser = await chromium.launch({
      headless: true,
    });

    const page = await browser.newPage();

    try {
      await page.goto(competitorLink.url, {
        waitUntil: 'domcontentloaded',
        timeout: 30000,
      });

      const title = await page.title();
      const bodyText = await page.locator('body').innerText();

      const price = extractPrice(bodyText);

      const bodyText = await page.locator("body").innerText()

      cosnt price = extractPrice(bodyText)

      await this.prisma.priceHistory.create({
        data: {
          competitorLinkId: competitorLink.id,
          price: price,
          oldPrice: null,
          discountPercent: null,
          pageStatus: 'ACTIVE',
        },
      });

      await this.prisma.competitorLink.update({
        where: {
          id: competitorLink.id,
        },
        data: {
          lastCheckedAt: new Date(),
        },
      });

      return {
        competitorLink: competitorLink.id,
        url: competitorLink.url,
        pageStatus: 'ACTIVE',
        title,
      };
    } catch (error) {
      await this.prisma.priceHistory.create({
        data: {
          competitorLinkId: competitorLink.id,
          price: null,
          oldPrice: null,
          discountPercent: null,
          pageStatus: 'ERROR',
        },
      });

      await this.prisma.competitorLink.update({
        where: {
          id: competitorLink.id,
        },
        data: {
          lastCheckedAt: new Date(),
        },
      });

      return {
        competitorLinkId: competitorLink.id,
        url: competitorLink.url,
        pageStatus: 'ERROR',
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    } finally {
      await browser.close();
    }
  }
}

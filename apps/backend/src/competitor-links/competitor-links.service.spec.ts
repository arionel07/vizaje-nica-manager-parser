import { Test, TestingModule } from '@nestjs/testing';
import { CompetitorLinksService } from './competitor-links.service.js';

describe('CompetitorLinksService', () => {
  let service: CompetitorLinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CompetitorLinksService],
    }).compile();

    service = module.get<CompetitorLinksService>(CompetitorLinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

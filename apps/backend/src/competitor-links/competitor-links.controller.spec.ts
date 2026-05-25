import { Test, TestingModule } from '@nestjs/testing';
import { CompetitorLinksController } from './competitor-links.controller.js';

describe('CompetitorLinksController', () => {
  let controller: CompetitorLinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompetitorLinksController],
    }).compile();

    controller = module.get<CompetitorLinksController>(
      CompetitorLinksController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

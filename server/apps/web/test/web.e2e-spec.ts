import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { WebModule } from '../src/web.module';

describe('webController (e2e)', () => {
  let web;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [WebModule],
    }).compile();

    web = moduleFixture.createNestApplication();
    await web.init();
  });

  it('/ (GET)', () => {
    return request(web.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});

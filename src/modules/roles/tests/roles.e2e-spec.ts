import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { RolesModule } from '../roles.module';

describe('RolesController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [RolesModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/roles (GET)', () => {
    return request(app.getHttpServer())
      .get('/roles')
      .expect(200)
      .expect((res) => {
        expect(Array.isArray(res.body)).toBe(true);
      });
  });

  it('/roles (POST)', () => {
    return request(app.getHttpServer())
      .post('/roles')
      .send({ role: 'test-role' })
      .expect(201)
      .expect((res) => {
        expect(res.body.role).toBe('test-role');
      });
  });

  afterAll(async () => {
    await app.close();
  });
});

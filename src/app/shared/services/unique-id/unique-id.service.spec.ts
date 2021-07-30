import { UniqueIdService } from './unique-id.service';

describe(UniqueIdService.name, () => {
  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const uniqueIdService = new UniqueIdService();
    const id = uniqueIdService.generateUniqueIdWithPrefix('app');
    expect(id).toContain('app-');
  });
});

// <alguma coisa> should <fazer algo> when <determinadas condições estiverem presentes>
// nome do metodo com #

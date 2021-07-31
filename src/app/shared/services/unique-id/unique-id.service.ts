import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private numberOfGeneratedIds = 0;

  public generateUniqueIdWithPrefix(prefix: string): string {
    if (!prefix) {
      throw new Error('Prefix is required');
    }

    this.numberOfGeneratedIds++;

    const uniqueId = this.generate();
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGeneratedIds(): number {
    return this.numberOfGeneratedIds;
  }

  private generate(): string {
    return uuidv4();
  }
}

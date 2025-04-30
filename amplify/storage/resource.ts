// amplify/storage/resource.ts
import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'hospitalStorage',  // Nombre interno (no es el nombre público del bucket)
});
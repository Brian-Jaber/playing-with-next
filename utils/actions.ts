'use server';
import { revalidatePath } from 'next/cache';
import db from './db'

export const newTodo = async (formData) => {
  const todo = await db.todo.create({
    data: {
      content: formData.get('content'),
    },
  })

  revalidatePath('/todos')
}

/* 
  - Server actions, unlike API calls, cannot respond to requests.
    This can make them effective for side effects.
  
  - After performing server action, revalidatePath revalidates cache of todos page and refetch data
    Essentially a 'soft reset', does not refresh page.
*/
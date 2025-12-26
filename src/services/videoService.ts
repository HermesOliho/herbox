import type { Video } from '@/types/video'

const mockVideos = [
  {
    id: '1',
    title: 'The witcher',
    slug: 'the-witcher',
    description:
      'Un chasseur de monstres solitaire lutte pour trouver sa place dans un monde où les gens souvent se révèlent plus vicieux que les bêtes.',
    tags: ['aventure', 'fantasy'],
    posterUrl:
      'https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    videoUrl: 'https://example.com/video1.mp4',
  },
  {
    id: '2',
    title: 'Stranger Things',
    slug: 'stranger-things',
    description: "Un groupe d'enfants découvre des phénomènes surnaturels dans leur petite ville.",
    tags: ['science-fiction', 'action'],
    posterUrl:
      'https://images.unsplash.com/photo-1505968409348-bd000797c92e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    videoUrl: 'https://example.com/video2.mp4',
  },
  {
    id: '3',
    title: 'Docteur Strange',
    slug: 'docteur-strange',
    description:
      'Un neurochirurgien talentueux découvre le monde mystique après un accident de voiture qui met fin à sa carrière.',
    tags: ['action', 'fantastique'],
    posterUrl:
      'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    videoUrl: 'https://example.com/video3.mp4',
  },
  {
    id: '4',
    title: 'Vidéo 4',
    slug: 'video-4',
    description: 'Description de la vidéo 4',
    tags: ['comédie', 'famille'],
    posterUrl:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    videoUrl: 'https://example.com/video4.mp4',
  },
  {
    id: '5',
    title: 'Vidéo 5',
    slug: 'video-5',
    description: 'Description de la vidéo 5',
    tags: ['horreur', 'thriller'],
    posterUrl:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    videoUrl: 'https://example.com/video5.mp4',
  },
]
export const fetchAllVideos = async (): Promise<Video[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockVideos)
    }, 500)
  })
}

export const fetchVideoBySlug = async (slug: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const video = mockVideos.find((v) => v.slug === slug)
      if (video) {
        resolve(video)
      } else {
        reject(new Error('Video not found'))
      }
    }, 500)
  })
}

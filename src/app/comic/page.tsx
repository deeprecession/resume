import moment from 'moment';
import Image from 'next/image';

interface Comic {
  img: string;
  alt: string;
  safe_title: string;
  year: number;
  month: number;
  day: number;
}

async function fetchComicInfo(id: string): Promise<Comic | null> {
  const url = new URL('https://fwd.innopolis.university/api/comic');
  url.searchParams.append('id', id);

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch comic info:', error);
    return null;
  }
}

async function fetchID(): Promise<string | null> {
  const url = new URL('https://fwd.innopolis.university/api/hw2');
  url.searchParams.append('email', 'v.kishkovksiy@innopolis.university');

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.text();
  } catch (error) {
    console.error('Failed to fetch comic ID:', error);
    return null;
  }
}

async function getComicData() {
  const id = await fetchID();
  if (!id) {
    return { error: 'Failed to load comic ID.' };
  }

  const comic = await fetchComicInfo(id);
  if (!comic) {
    return { error: 'Failed to load comic data.' };
  }

  return { comic };
}

export default async function ComicPage() {
  const { comic, error } = await getComicData();

  if (error) {
    return <div>{error}</div>;
  }

  if (comic == undefined) {
    return <div>Comic is not found</div>;
  }

  return (
    <div className="comic">
      <div className="comic-title">{comic.safe_title}</div>
      <div className="comic-image-container">
        <Image priority src={comic.img} alt={comic.alt} fill />
      </div>
      <div className="comic-upload-date">
        {moment([comic.year, comic.month - 1, comic.day]).fromNow()}
      </div>
    </div>
  );
}

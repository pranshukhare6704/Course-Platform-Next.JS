import { useState } from 'react';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [publishDate, setPublishDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here we would typically send this data to an API
    console.log({ title, content, publishDate });
    // Reset form
    setTitle('');
    setContent('');
    setPublishDate('');
  };

  return (
    <div className="container">
      <Head>
        <title>Create New Blog Post - SciAstra</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Create New Blog Post</h1>
      <form onSubmit={handleSubmit} className="create-post-form">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="content">Content</Label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="publishDate">Publish Date</Label>
          <Input
            id="publishDate"
            type="datetime-local"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Create Post</Button>
      </form>
    </div>
  );
}
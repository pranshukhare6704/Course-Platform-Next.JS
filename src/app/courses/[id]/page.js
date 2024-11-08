import Link from 'next/link';
import Button from '@/components/ui/button';
import { getCourses } from '@/lib/courses';


export default function CoursePage({ course }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Head>
        <title>{course.title} - SciAstra</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p className="price">
        ${course.discountedPrice} <span className="original-price">${course.originalPrice}</span>
      </p>
      <Button>
        <Link href={`/checkout/${course.id}`}>Purchase Course</Link>
      </Button>
    </div>
  );
}

export async function getStaticPaths() {
  const courses = await getCourses();
  const paths = courses.map((course) => ({
    params: { id: course.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const courses = await getCourses();
  const course = courses.find((c) => c.id.toString() === params.id);

  if (!course) {
    return { notFound: true };
  }

  return { props: { course } };
}
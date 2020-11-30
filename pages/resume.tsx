import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Layout from '../components/layout';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import References from '../components/Resume/References';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Courses',
  'References',
];

const Resume = () => (
  <>
    <NextSeo
      title="Resume | Michael D'Angelo"
      description="My resume - probably out of date."
    />
    <Layout>
      <article className="post" id="resume">
        <header>
          <div className="title">
            <h2><Link href="resume">Resume</Link></h2>
            <div className="link-container">
              {sections.map((sec) => (
                <h4 key={sec}>
                  <a href={`#${sec.toLowerCase()}`}>{sec}</a>
                </h4>
              ))}
            </div>
          </div>
        </header>
        <Education data={degrees} />
        <Experience data={positions} />
        <Skills skills={skills} categories={categories} />
        <Courses data={courses} />
        <References />
      </article>
    </Layout>
  </>
);

export default Resume;

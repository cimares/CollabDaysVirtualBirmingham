import * as React from 'react';

export interface ICodeOfConductProps {}

export const CodeOfConduct: React.FunctionComponent<ICodeOfConductProps> = (props: ICodeOfConductProps) => {
  return (
    <div className="cod__container container items-center m-auto leading-normal max-w-3xl">
      <h1 className="text-display text-3xl my-4 text-center">Our Code of conduct</h1>
      
      <p>As event and experience organizers, we seek to provide a respectful, friendly, professional experience for everyone, regardless of gender, sexual orientation, physical appearance, disability, age, race or religion. We do not tolerate any behavior that is degrading to any gender, race, sexual orientation, or disability, or any behavior that would be deemed harassment or discrimination. Individuals are responsible for knowing and abiding by our standards and we encourage everyone to assist in creating a welcoming and safe environment. Please report any concerns, suspicious or disruptive activity or behavior to the organizing team, so that we can address the issue immediately.</p>

      <h2 className="text-display text-2xl my-4 text-center">Our Values</h2>

      <p>Throughout each interaction, we aspire to embody and champion the below values:</p>

      <h3 className="text-display text-xl my-4 text-center">Be friendly and welcoming</h3>

      <ul className="list-disc pl-4">
        <li>Listen with purpose, create space for others’ communication preferences</li>
        <li>Ask yourself how you can make someone else’s life easier</li>
      </ul>
      
      <h3 className="text-display text-xl my-4 text-center">Be patient</h3>

      <ul className="list-disc pl-4">
        <li>Remember that people have varying communication styles and preferences</li>
        <li>Recognize that not everyone is using their native language (meaning and tone can be lost in translation)</li>
      </ul>
      
      <h3 className="text-display text-xl my-4 text-center">Be thoughtful</h3>

      <ul className="list-disc pl-4">
        <li>Think about how others will interpret your words – productive, clear communication requires effort!</li>
        <li>Remember that sometimes it is best to refrain entirely from commenting</li>
      </ul>
      
      <h3 className="text-display text-xl my-4 text-center">Be respectful and inclusive</h3>

      <ul className="list-disc pl-4">
        <li>Respect differences of opinion</li>
        <li>Seek to build bridges and understand, not condemn, or criticize</li>
        <li>Make a conscious effort to include people who differ from you</li>
      </ul>

      <h3 className="text-display text-xl my-4 text-center">Be open and curious</h3>

      <ul className="list-disc pl-4">
        <li>Assume good intent and interpret others’ statements or questions in good faith</li>
        <li>Ask questions to understand, not denounce</li>
        <li>Focus on continuous learning – get better at the things you already know, tackle completely new things, and ask others about their expertise to deepen yours</li>
      </ul>
      
      <h3 className="text-display text-2xl my-4 text-center">In summary</h3>

      <ul className="list-disc pl-4">
        <li>Treat everyone with respect, kindness, and empathy.</li>
        <li>Use welcoming and inclusive language.</li>
        <li>Be thoughtful in how you communicate in person and online.</li>
        <li>Don’t be destructive or inflammatory.</li>
        <li>Gracefully accept constructive criticism.</li>
        <li>Listen with purpose, create space for others’ communication preferences; honor them by shifting yours to accommodate.</li>
        <li>Reach out to the organizers if you need anything at all!</li>
      </ul>
    </div>
  );
};
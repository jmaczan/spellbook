import React from 'react';
import { ExternalLink } from '../external-link/external-link';
import './add.scss';

export const AddScript = () => (
  <section className='add'>
    <h1>Add a Script</h1>
    <div>
      <ExternalLink url='https://github.com/jmaczan/spellbook/tree/main/api/spells'>Click here to go to spells repository</ExternalLink>
    </div>
    <div>
      <ol>
        <li><ExternalLink url='https://github.com/jmaczan/spellbook/fork'>Fork the repository</ExternalLink></li>
        <li>Go to <code>registry/spells</code> directory</li>
        <li>Create a directory with name of your script, let&apos;s say your script is <code>date-checker</code>, so you create a directory with this name</li>
        <li>Inside <code>date-checker</code> folder, create a file <code>date-checker.sh</code> and put script content in there</li>
        <li>Inside <code>date-checker</code> folder, create a file <code>date-checker.json</code> and put there metadata, such as name, title, version, etc. <ExternalLink url='https://github.com/jmaczan/spellbook/blob/main/registry/spells/test/spell.json'>Sample JSON is here</ExternalLink></li>
        <li>Finally, create a commit and <ExternalLink url='https://github.com/jmaczan/spellbook/pulls'>send a Pull Request</ExternalLink></li>
      </ol>
    </div>
    <div>
    <ExternalLink url='https://github.com/jmaczan/spellbook/tree/main/api/spells'>Click here to go to spells repository</ExternalLink>
    </div>
    <div className='add__personal'>
      It&apos;s not an ideal solution, I am aware of that and apologies for inconvenience. It might change in the future!
    </div>
  </section>
);

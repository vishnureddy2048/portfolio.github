import React from 'react';
import skillsData from '../data/skillsData';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="field-label">skills</p>
        <h2 className="section-title">Tech stack</h2>

        <div className="skills__grid">
          {skillsData.map((group) => (
            <div className="skills__group" key={group.group}>
              <h3 className="skills__group-title mono">{group.group}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li className="skills__item" key={item.name}>
                    <div className="skills__item-head">
                      <span>{item.name}</span>
                    </div>
                    <div className="skills__bar">
                      <div
                        className="skills__bar-fill"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

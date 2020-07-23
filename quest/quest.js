import allQuests from '../data.js';
import { findById, renderSection } from './questUtils.js';

const main = document.querySelector('main');

// placeholder for query param
const questId = 'monsters';

const questData = findById(allQuests, questId);

const sectionEl = renderSection(questData);

main.append(sectionEl);
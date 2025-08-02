// Helper to extract text from React elements, simplifying for PDF
import React from 'react';
// import { renderToString } from 'react-dom/server'; // renderToString is not actually used here for the conversion
import CollegeGuide from '../pages/collegeguide'; // Adjusted path
import TradeSchoolGuide from '../pages/tradeschoolguide'; // Adjusted path
import CommunityCollegeGuide from '../pages/twoyear'; // Added import for Community College
import DirectEntryCareersGuide from '../pages/careers'; // Adjusted path, assuming Careers.jsx is the Direct Entry Guide

const extractTextFromReactNode = (node) => {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(extractTextFromReactNode).join('');
  }
  if (node && typeof node === 'object' && node.props) {
    let text = '';
    // Handle specific tags for formatting
    if (node.type === 'h1' || node.type === 'h2' || node.type === 'h3' || node.type === 'h4') {
      text += `\n\n${extractTextFromReactNode(node.props.children).toUpperCase()}\n\n`;
    } else if (node.type === 'p') {
      // Special handling for paragraphs within list items that are 'why-it-matters' or 'example'
      // These are often meant to be sub-bullets or inline notes
      if (node.props.className && (node.props.className.includes('why-it-matters') || node.props.className.includes('example') || node.props.className.includes('advice-box') || node.props.className.includes('intro') || node.props.className.includes('pathway-note') || node.props.className.includes('military-interest-note'))) {
        text += `\n${extractTextFromReactNode(node.props.children)}\n`;
      } else {
        text += `\n${extractTextFromReactNode(node.props.children)}\n`;
      }
    } else if (node.type === 'ul') {
      text += '\n' + extractTextFromReactNode(node.props.children) + '\n';
    } else if (node.type === 'li') {
      let liText = extractTextFromReactNode(node.props.children);
      // Remove asterisks used for bolding in JSX source before adding to list item
      liText = liText.replace(/\*\*(.*?)\*\*/g, '$1'); // Remove **bold** markers
      liText = liText.replace(/_([^_]+)_/g, '$1'); // Remove _italic_ markers if any
      text += `- ${liText}\n`;
    } else if (node.type === 'a') {
      // For links, just show the URL in text, if href exists. Also get text content.
      const linkText = extractTextFromReactNode(node.props.children);
      const href = node.props.href || '';
      if (linkText && href) {
        text += `${linkText} (${href})`;
      } else if (href) {
        text += href; // If no text, just show the link
      } else {
        text += linkText; // If no href, just show the text
      }
    } else if (node.type === 'blockquote') {
      text += `\n"${extractTextFromReactNode(node.props.children)}"\n`;
    } else if (node.type === 'hr') {
        text += `\n---\n`; // Represent horizontal rule
    } else if (node.type === 'em' || node.type === 'i') {
        text += extractTextFromReactNode(node.props.children); // Just get text, ignore italic formatting for plain text
    } else if (node.type === 'strong' || node.type === 'b') {
        text += extractTextFromReactNode(node.props.children); // Just get text, ignore bold formatting for plain text
    } else if (node.type === 'span' || node.type === 'div' || node.type === 'section') {
        // Recursively extract text from children for containers
        text += extractTextFromReactNode(node.props.children);
    } else {
      // For other tags, just extract their children's text
      text += extractTextFromReactNode(node.props.children);
    }
    return text;
  }
  return '';
};


// Function to get plain text from a React component
const getPlainTextFromReactComponent = (Component) => {
    // When you pass <Component /> to extractTextFromReactNode,
    // it receives the React element object directly for traversal.
    return extractTextFromReactNode(<Component />);
};


export const GUIDES_TEXT_CONTENT = {
  College: getPlainTextFromReactComponent(CollegeGuide),
  "Trade School": getPlainTextFromReactComponent(TradeSchoolGuide),
  "Community College": getPlainTextFromReactComponent(CommunityCollegeGuide), // Added Community College
  "Direct Job Entry": getPlainTextFromReactComponent(DirectEntryCareersGuide), // Key changed from "Direct Entry"
};

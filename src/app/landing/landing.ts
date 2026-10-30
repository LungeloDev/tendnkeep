import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-landing',
  styleUrl: './landing.css',
  templateUrl: './landing.html',
})
export class Landing {
  readonly currentYear = new Date().getFullYear();

  // Add your public email address when it is ready.
  readonly contactEmail = '';

  menuOpen = false;
  activeSupport = 'volunteer';
  openFaq: number | null = 0;

  readonly programmes = [
    {
      number: '01',
      category: 'Children & young people',
      title: 'Big dreams deserve a starting point.',
      description:
        'Creating spaces where children can discover possibilities, ask questions, meet people who inspire them, and learn about paths beyond their circumstances.',
      activities: ['Mentorship', 'Learning opportunities', 'Career exposure'],
      theme: 'purple',
    },
    {
      number: '02',
      category: 'Homes & communities',
      title: 'Care you can see. Dignity you can feel.',
      description:
        'Building on the simple act that started our story: helping make homes feel cared for. We want to bring people together around practical community needs.',
      activities: ['Home upliftment', 'Donation drives', 'Community events'],
      theme: 'earth',
    },
    {
      number: '03',
      category: 'Technology & possibility',
      title: 'From “what if?” to “I made this.”',
      description:
        'Developing opportunities for young people to explore coding, IoT and robotics through hands-on learning, creative problem-solving, and guided discovery.',
      activities: ['Coding', 'IoT & electronics', 'Robotics'],
      theme: 'green',
    },
  ];

  readonly steps = [
    {
      number: '01',
      title: 'Listen first.',
      description:
        'Understand what people need, what they hope for, and what already makes their community strong.',
    },
    {
      number: '02',
      title: 'Show up with care.',
      description:
        'Bring people, practical support and opportunities together around a shared purpose.',
    },
    {
      number: '03',
      title: 'Keep growing.',
      description:
        'Build relationships that encourage confidence, learning and progress beyond a single event.',
    },
  ];

  readonly supportOptions = [
    {
      id: 'volunteer',
      number: '01',
      title: 'Give your time',
      shortDescription: 'Show up. Share a skill. Make someone feel seen.',
      heading: 'Your time can open a door.',
      description:
        'Whether you enjoy working with children, organising events, painting, mentoring, or teaching something useful, there is room for people who care.',
      ideas: [
        'Support a community activity',
        'Share a practical or creative skill',
        'Help organise learning experiences',
      ],
      enquiry: 'Volunteer enquiry',
    },
    {
      id: 'donate',
      number: '02',
      title: 'Give what you can',
      shortDescription: 'Help turn everyday generosity into practical care.',
      heading: 'Small contributions can meet real needs.',
      description:
        'We are preparing ways for people to support community activities with useful items, learning materials and other resources matched to identified needs.',
      ideas: [
        'Learning materials and stationery',
        'Useful equipment and project supplies',
        'Resources for community activities',
      ],
      enquiry: 'Donation enquiry',
    },
    {
      id: 'partner',
      number: '03',
      title: 'Grow with us',
      shortDescription: 'Bring your organisation, ideas or resources.',
      heading: 'There is more we can do together.',
      description:
        'We would love to connect with schools, community groups, businesses and people who share our belief that opportunity should reach further.',
      ideas: [
        'Host or support a learning experience',
        'Offer mentorship or career exposure',
        'Explore a community partnership',
      ],
      enquiry: 'Partnership enquiry',
    },
  ];

  readonly faqs = [
    {
      question: 'Who is Tend N Keep for?',
      answer:
        'Our mission is to support people from disadvantaged backgrounds across South Africa, with a particular focus on children and young people. We are starting with what we can do meaningfully and building from there.',
    },
    {
      question: 'Are all the programmes already running?',
      answer:
        'Our story began with practical acts of care, including painting homes. The programmes on this website describe the areas we are developing. Confirmed activities and ways to participate will be shared as they become available.',
    },
    {
      question: 'Do children need technology experience?',
      answer:
        'Our vision for technology learning includes beginners. We want children to have space to be curious and build confidence, even if they have never written code or worked with electronics before.',
    },
    {
      question: 'Can I help without making a financial contribution?',
      answer:
        'Yes. Your time, skills, ideas, useful resources and connections can all make a difference. Volunteering and partnerships are part of how we hope to grow.',
    },
  ];

  get selectedSupport() {
    return (
      this.supportOptions.find((option) => option.id === this.activeSupport) ??
      this.supportOptions[0]
    );
  }

  get contactHref(): string {
    return `mailto:${this.contactEmail}?subject=${encodeURIComponent(
      `Tend N Keep — ${this.selectedSupport.enquiry}`,
    )}`;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  selectSupport(id: string): void {
    this.activeSupport = id;
  }

  toggleFaq(index: number): void {
    this.openFaq = this.openFaq === index ? null : index;
  }
}
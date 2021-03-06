import React from 'react';

export const ScrumboardInfo = () => (
    <div>
        <p>
            Provides the team a shared view of the state of the development. <br />
            It shows the work that hasn’t started, user stories and tasks that are in progress,
            the work that has been finished, but are waiting for approval,
            and the user stories and tasks that have been completed.
        </p>
    </div>
);
export const ProductBacklogInfo = () => (
    <div>
        <p>Create and prioritise user stories, tasks and issues in order to plan your project.</p>
        <p style={{ marginTop: '1rem' }}>
            A product backlog is a prioritised list of work items written out as user stories.
            The most important user stories are displayed at the top so the development team always knows
            what they need to deliver next.
        </p>
        <p style={{ marginTop: '1rem' }}>
            The project goal and requirements comprise the basis of product backlog.
            This list of user stories is organised by the product owner in interaction with development team and stakeholders.
            The goal is to optimise the product delivery and workload for everyone.
        </p>
        <p style={{ marginTop: '1rem' }}>
            Product backlog is not static.
            It should be maintained and refined continuously so that the priorities,
            changes, and feedback are taken into account and the backlog is always up-to-date.
            Backlog can and should be shared with customers and other stakeholders for discussion and further planning.
        </p>
        <p style={{ marginTop: '1rem' }}>
            Product backlog is the main line of communication between product owner and the team.
            The development team pulls work from the product backlog in iterations called sprints.
            Product owner controls the priorities of work items in the list, but the pace of work is dictated
            by the development team and planned carefully in each sprint planning by the whole scrum team.
        </p>
    </div>
);
export const SprintBacklogInfo = () => (
    <div>
        <p>Create and prioritise user stories, tasks and issues in order to plan your next sprint.</p>
        <p style={{ marginTop: '1rem' }}>
            Sprint backlog is the result of the sprint planning meeting.
            It consists of the user stories and  tasks the whole team has agreed upon.
            Good plan for each sprint will allow the team to focus on their goals.
            <br />
            Ordered product backlog is also a must - if the team delivers their sprint goal early,
            they can easily pick more user stories from the product backlog.
        </p>
    </div>
);
export const CurrentSprintInfo = () => (
    <div>
        <p>Contains all the user stories and tasks added to sprint backlog in sprint planning.</p>
        <p style={{ marginTop: '1rem' }}>
            Adding new stories is enabled on this list
            in order to make changes as seamless and easy as possible.
        </p>
    </div>
);
export const InProgressInfo = () => (
    <div>
        <p>These user stories and tasks are in progress.</p>
        <p style={{ marginTop: '1rem' }}>
            When taking on a new task,
            drag it to this list in order for the whole team to keep track which tasks are worked on,
            and which are available for other team members.
        </p>
    </div>
);
export const InReviewInfo = () => (
    <div>
        <p>
            These user stories and tasks have been completed by the requirements the team has agreed upon together
            and they are waiting for review in order to be merged into the increment.
        </p>
        <p style={{ marginTop: '1rem' }}>
            Review in itself is not official part of Scrum method,
            but this column has been added here to simulate the workflow of actual software development.
            As a developer you will not be able to merge your work straight into projects that are in development.
            Instead someone will be reviewing you work and giving you comments and request changes before the permission to merge is granted.
        </p>
        <p style={{ marginTop: '1rem' }}>
            In your group assignments as students you can start learning this by reviewing each other’s work.
            We strongly recommend adopting this practice in order to get accustomed to the workflow.
            Other benefits are learning to read code done by others,
            but also focusing on writing code in a way that your team will be able to read and assess.
            It also has benefits for the team as it makes the whole process of development more defined.
        </p>
    </div>
);
export const DoneInfo = () => (
    <div>
        <p>These user stories and tasks have been completed by the requirements the team has agreed upon together and they have been merged into the increment.
</p>
    </div>
);
export const UserstoryInfo = () => (
    <div>
        <p>“As a [person], I [want to], [so that].”</p>
        <p style={{ marginTop: '1rem' }}>
            User stories are a core component of the Scrum process.
            They focus the teams attention to the actual people that will be using the software,
            to the why something is being done instead of the how.
        </p>
        <p style={{ marginTop: '1rem' }}>
            User stories are usually written by the product owner using non-technical language
            describing why something is being done and what value it brings.
            User story is the smallest unit of work in the scrum process.
            It’s scope should be one that can be reached within a sprint
            and reasonably independent so that a single developer will be able to accomplish the task.
        </p>
        <p style={{ marginTop: '1rem' }}>
            In sprint planning the team will decide which user stories are added to sprint backlog.
            At this time the team will discuss and agree together on the requirements and functionalities that each story entails.
            Once the team has an agreed upon understanding of these, they are added to the description of the story.
        </p>
    </div>
);



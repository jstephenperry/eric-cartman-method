# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0-alpha.1] - 2026-02-05

### Added

- Initial project structure implementing Shape Up methodology
- Core module with Cartman Master orchestrator agent
- ECM module with five Shape Up agents:
  - Maya (Shaper) - Problem Shaper + Research Specialist
  - Parker (Pitcher) - Pitch Writer + Appetite Setter
  - Wyatt (Technical Shaper) - Technical Shaper + De-risking Specialist
  - Cameron (Cycle Lead) - Cycle Lead + Building Coordinator
  - Alex (Builder) - Builder + Implementation Specialist
- Shaping workflows:
  - Shape Problem
  - Shape Solution
  - Breadboard
  - De-Risk
  - Write Pitch
- Betting workflows:
  - Betting Table
  - Appetite Setting
- Building workflows:
  - Cycle Planning
  - Create Scope
  - Dev Scope
  - Update Hill Chart
  - Code Review
  - Circuit Breaker
- Cool-down workflows:
  - Bug Bash
  - Tech Debt
  - Exploration
- Quick Flow workflows for fast-track work:
  - Quick Spec
  - Quick Dev
- CLI tooling with install and status commands
- Documentation following Diataxis structure
- Agent schema validation

### Shape Up Concepts Implemented

- Fixed time, variable scope cycles (6-week big batch, 2-week small batch)
- Appetite-based time budgeting
- Pitch-driven shaping process
- Betting table for strategic commitment
- Scope discovery during building
- Hill chart progress tracking
- Circuit breaker ship-or-kill decisions
- Cool-down periods between cycles
- No backlog philosophy

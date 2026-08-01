import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import { FilterSection } from './FilterSection';
import { ActiveFilters } from './ActiveFilters';
import { CheckboxGroup } from './CheckboxGroup';
import { SearchFilter } from './SearchFilter';
import { RangeSlider } from './RangeSlider';

const filterData = {
  cgpa: ['6+', '7+', '8+', '9+'],
  industries: [
    'Information Technology',
    'Banking & Finance',
    'Consulting',
    'Healthcare',
    'Manufacturing',
    'E-Commerce',
    'Telecom',
    'Automobile',
    'Education',
    'Media',
  ],
  departments: [
    'Computer Science',
    'Information Technology',
    'Mechanical',
    'Civil',
    'Electronics',
    'Electrical',
    'AI & ML',
    'Data Science',
    'Marketing',
    'HR',
  ],
  skills: ['Java', 'Spring Boot', 'React', 'Node.js', 'MongoDB', 'Express', 'Angular', 'Python', 'C++', 'SQL', 'Docker', 'AWS', 'Git', 'JavaScript', 'TypeScript'],
  jobTypes: ['Full Time', 'Part Time', 'Internship', 'Remote', 'Hybrid', 'Contract'],
  experience: ['Fresher', '0-1 Years', '1-2 Years', '2-5 Years', '5+ Years'],
  locations: ['Mumbai', 'Pune', 'Delhi', 'Bangalore', 'Hyderabad', 'Remote'],
  companyTypes: ['Startup', 'MNC', 'Government', 'Product Based', 'Service Based'],
};

export function FilterSidebar() {
  const [openSections, setOpenSections] = useState({ cgpa: true, industry: true, department: true, skills: true, jobType: true, experience: true, salary: true, location: true, companyType: true });
  const [selected, setSelected] = useState({ cgpa: '', industry: [], department: [], skills: [], jobType: [], experience: [], location: [], companyType: [] });
  const [salary, setSalary] = useState(12);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSection = (key) => setOpenSections((current) => ({ ...current, [key]: !current[key] }));

  const addSelection = (group, value) => {
    if (group === 'cgpa') {
      setSelected((current) => ({ ...current, cgpa: value }));
      return;
    }

    setSelected((current) => {
      const list = current[group] || [];
      return {
        ...current,
        [group]: list.includes(value) ? list.filter((item) => item !== value) : [...list, value],
      };
    });
  };

  const removeSelection = (group, value) => {
    if (group === 'cgpa') {
      setSelected((current) => ({ ...current, cgpa: '' }));
      return;
    }

    setSelected((current) => ({ ...current, [group]: (current[group] || []).filter((item) => item !== value) }));
  };

  const clearAll = () => {
    setSelected({ cgpa: '', industry: [], department: [], skills: [], jobType: [], experience: [], location: [], companyType: [] });
    setSalary(12);
  };

  const activeCount = useMemo(() => {
    const groups = Object.entries(selected).filter(([key, value]) => key !== 'cgpa' && Array.isArray(value));
    const selectedCount = groups.reduce((sum, [, values]) => sum + values.length, 0);
    return selectedCount + (selected.cgpa ? 1 : 0);
  }, [selected]);

  const activePills = useMemo(() => {
    const pills = [];
    if (selected.cgpa) pills.push({ group: 'cgpa', label: selected.cgpa });
    Object.entries(selected).forEach(([group, values]) => {
      if (group === 'cgpa') return;
      values.forEach((value) => pills.push({ group, label: value }));
    });
    return pills;
  }, [selected]);

  const sidebarContent = (
    <div className="w-full rounded-[24px] border border-white/10 bg-slate-900/80 p-4 shadow-[0_20px_50px_-24px_rgba(2,6,23,0.8)] backdrop-blur xl:sticky xl:top-5 xl:max-w-[320px]">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <div className="rounded-2xl bg-sky-500/15 p-2 text-sky-400"><Filter className="h-4 w-4" /></div>
          <div>
            <p className="text-sm font-semibold text-white">Filters</p>
            <p className="text-xs text-slate-400">{activeCount} selected</p>
          </div>
        </div>
        <button onClick={clearAll} className="text-sm font-medium text-sky-400 transition hover:text-sky-300">Clear All</button>
      </div>

      <div className="mt-4">
        <ActiveFilters pills={activePills} onRemove={removeSelection} />
      </div>

      <div className="mt-4 space-y-2">
        <FilterSection title="CGPA" open={openSections.cgpa} onToggle={() => toggleSection('cgpa')}>
          <div className="space-y-2">
            {filterData.cgpa.map((value) => (
              <label key={value} className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 transition hover:border-sky-300 hover:bg-sky-50">
                <input type="radio" name="cgpa" checked={selected.cgpa === value} onChange={() => addSelection('cgpa', value)} className="h-4 w-4 border-slate-300 text-sky-600 focus:ring-sky-500" />
                <span>{value}</span>
              </label>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Industry" open={openSections.industry} onToggle={() => toggleSection('industry')}>
          <SearchFilter items={filterData.industries} selected={selected.industry} onSelect={(value) => addSelection('industry', value)} />
        </FilterSection>

        <FilterSection title="Department" open={openSections.department} onToggle={() => toggleSection('department')}>
          <SearchFilter items={filterData.departments} selected={selected.department} onSelect={(value) => addSelection('department', value)} />
        </FilterSection>

        <FilterSection title="Skills" open={openSections.skills} onToggle={() => toggleSection('skills')}>
          <SearchFilter items={filterData.skills} selected={selected.skills} onSelect={(value) => addSelection('skills', value)} />
        </FilterSection>

        <FilterSection title="Job Type" open={openSections.jobType} onToggle={() => toggleSection('jobType')}>
          <CheckboxGroup items={filterData.jobTypes} selected={selected.jobType} onSelect={(value) => addSelection('jobType', value)} />
        </FilterSection>

        <FilterSection title="Experience" open={openSections.experience} onToggle={() => toggleSection('experience')}>
          <CheckboxGroup items={filterData.experience} selected={selected.experience} onSelect={(value) => addSelection('experience', value)} />
        </FilterSection>

        <FilterSection title="Salary" open={openSections.salary} onToggle={() => toggleSection('salary')}>
          <RangeSlider value={salary} onChange={setSalary} min={0} max={25} />
        </FilterSection>

        <FilterSection title="Location" open={openSections.location} onToggle={() => toggleSection('location')}>
          <SearchFilter items={filterData.locations} selected={selected.location} onSelect={(value) => addSelection('location', value)} />
        </FilterSection>

        <FilterSection title="Company Type" open={openSections.companyType} onToggle={() => toggleSection('companyType')}>
          <CheckboxGroup items={filterData.companyTypes} selected={selected.companyType} onSelect={(value) => addSelection('companyType', value)} />
        </FilterSection>
      </div>
    </div>
  );

  return (
    <>
      <button onClick={() => setMobileOpen(true)} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm font-medium text-slate-200 shadow-sm xl:hidden">
        <SlidersHorizontal className="h-4 w-4" />
        Filters
      </button>

      <div className="hidden xl:block">{sidebarContent}</div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-slate-950/60 lg:hidden">
            <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', stiffness: 260, damping: 24 }} className="h-full w-[90%] max-w-[320px] bg-slate-950 p-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="rounded-2xl bg-sky-500/15 p-2 text-sky-400"><Filter className="h-4 w-4" /></div>
                  <p className="text-sm font-semibold text-white">Filters</p>
                </div>
                <button onClick={() => setMobileOpen(false)} className="rounded-full p-2 text-slate-400 hover:bg-white/10"><X className="h-4 w-4" /></button>
              </div>
              <div className="mt-4 overflow-y-auto pb-6">{sidebarContent}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

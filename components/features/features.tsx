import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  GitBranch, 
  Cpu, 
  Activity, 
  Zap 
} from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-[1200px] mx-auto py-12 px-6">
        {/* Section Header */}
        <h2 className="text-3xl leading-10 sm:text-4xl md:text-[40px] md:leading-13 font-semibold tracking-tight">
          System Architecture: <br />
          <span className="text-muted-foreground">Core modules for high-performance study.</span>
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-3 gap-6">
          
          {/* --- Feature 1: The Kernel (Planning) --- */}
          
          {/* Text Card */}
          <div className="bg-muted/50 border rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-1 flex flex-col justify-center">
            {/* Media Placeholder for Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background/50 border rounded-lg flex items-center justify-center text-muted-foreground text-xs">
              [Syllabus Tree View]
            </div>

            <span className="text-xl font-semibold tracking-tight text-primary">
              The Syllabus Kernel
            </span>

            <ul className="mt-6 space-y-5">
              <li>
                <div className="flex items-start gap-3">
                  <GitBranch className="shrink-0 w-5 h-5 text-blue-500" />
                  <div className="space-y-1">
                    <p className="font-medium leading-none">Hierarchical File System</p>
                    <p className="text-sm text-muted-foreground">
                      Visualize your entire syllabus as a directory tree. Mount resources and track status per topic.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Cpu className="shrink-0 w-5 h-5 text-blue-500" />
                  <div className="space-y-1">
                    <p className="font-medium leading-none">Active Task Scheduler</p>
                    <p className="text-sm text-muted-foreground">
                      Auto-reschedule missed topics without breaking your flow. The OS adapts to your speed.
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <Button className="mt-8 w-full group">
              Initialize Setup 
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Desktop Media Feature 1 (Right of text) */}
          <div className="hidden md:flex bg-muted/30 border rounded-xl col-span-1 md:col-span-3 lg:col-span-2 items-center justify-center min-h-[300px]">
             {/* Replace this div with your <Image /> of the Syllabus Tree/Kanban Board */}
             <p className="text-muted-foreground font-mono text-sm">
               &lt;System_UI: Syllabus_Tree_Visualization /&gt;
             </p>
          </div>


          {/* --- Feature 2: System Monitor (Analytics) --- */}

          {/* Desktop Media Feature 2 (Left of text) */}
          <div className="hidden md:flex bg-muted/30 border rounded-xl col-span-1 md:col-span-3 lg:col-span-2 items-center justify-center min-h-[300px]">
            {/* Replace this div with your <Image /> of the Heatmap/Graphs */}
            <p className="text-muted-foreground font-mono text-sm">
               &lt;System_UI: Analytics_Dashboard_Heatmap /&gt;
             </p>
          </div>

          {/* Text Card */}
          <div className="bg-muted/50 border rounded-xl p-6 col-span-1 md:col-span-2 lg:col-span-1 flex flex-col justify-center">
            {/* Media Placeholder for Mobile */}
            <div className="md:hidden mb-6 aspect-video w-full bg-background/50 border rounded-lg flex items-center justify-center text-muted-foreground text-xs">
              [Analytics Dashboard]
            </div>

            <span className="text-xl font-semibold tracking-tight text-primary">
              System Diagnostics
            </span>

            <ul className="mt-6 space-y-5">
              <li>
                <div className="flex items-start gap-3">
                  <Activity className="shrink-0 w-5 h-5 text-green-500" />
                  <div className="space-y-1">
                    <p className="font-medium leading-none">Mock Test Debugger</p>
                    <p className="text-sm text-muted-foreground">
                      Log syntax errors (silly mistakes) and logic errors (concepts). Generate patch reports instantly.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Zap className="shrink-0 w-5 h-5 text-green-500" />
                  <div className="space-y-1">
                    <p className="font-medium leading-none">Consistency Defrag</p>
                    <p className="text-sm text-muted-foreground">
                      Visual heatmaps track your deep work. Identify fragmented study gaps before they become critical.
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <Button className="mt-8 w-full group" variant="outline">
              Run Diagnostics 
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Features;

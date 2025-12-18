import { useRegion } from "@/context/RegionContext";
import { MapPin, Phone, Clock, Mail, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RegionDetailsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegionDetailsPanel = ({ isOpen, onClose }: RegionDetailsPanelProps) => {
  const { currentBranch, selectedRegion } = useRegion();

  if (!isOpen || !currentBranch) return null;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hello! I'm interested in ordering from Fayaz Bakers ${currentBranch.name}.`
    );
    window.open(`https://wa.me/${currentBranch.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-2xl animate-slide-in-right overflow-y-auto">
        <div className="relative">
          {/* Header Image */}
          <div className="relative h-48 md:h-56">
            <img
              src={currentBranch.image}
              alt={currentBranch.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 -mt-12 relative">
            <div className="bg-background rounded-xl shadow-lg p-6 border border-border">
              {/* Branch Name */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-2">
                  {selectedRegion.name} Area
                </span>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  {currentBranch.name}
                </h2>
              </div>

              {/* Details */}
              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">{currentBranch.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone Numbers</h4>
                    <div className="text-muted-foreground">
                      {currentBranch.phone.map((p, i) => (
                        <a
                          key={i}
                          href={`tel:${p}`}
                          className="block hover:text-primary transition-colors"
                        >
                          {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a
                      href={`mailto:${currentBranch.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {currentBranch.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Operating Hours</h4>
                    <p className="text-muted-foreground whitespace-pre-line">
                      {currentBranch.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <Button
                onClick={handleWhatsAppClick}
                className="w-full mt-6 bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegionDetailsPanel;
